const multer = require("multer");
const path = require("path");
const db = require("../config/db"); // Adjust this based on your DB connection

// Configure storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Ensure this directory exists
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage }).single("file");

exports.uploadFile = (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const filePath = "uploads/" + req.file.filename;
        const fileName = req.file.originalname;

        try {
            const query = "INSERT INTO files (file_name, file_path) VALUES (?, ?)";
            await db.query(query, [fileName, filePath]);
            res.status(200).json({ message: "File uploaded successfully", filePath });
        } catch (dbError) {
            res.status(500).json({ error: dbError.message });
        }
    });
};
