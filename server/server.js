const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");  // ✅ Using promise-based MySQL
const fileUpload = require("express-fileupload");
const path = require("path");
const uploadRoutes = require("./routes/uploadRoutes");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// ✅ Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api", uploadRoutes);
// ✅ Database Connection Setup
let db;
async function connectDB() {
    try {
        db = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "NewPassword",
            database: "sample",
        });
        console.log("✅ MySQL DB connected successfully!");
    } catch (error) {
        console.error("❌ Database Connection Failed:", error);
        process.exit(1); // Exit the app if DB connection fails
    }
}

// ✅ Middleware to attach DB instance to requests
app.use((req, res, next) => {
    req.db = db;
    next();
});

// ✅ Applications API Routes
app.get("/applications", async (req, res) => {
    try {
        const [results] = await req.db.query("SELECT * FROM applications");
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/applications", async (req, res) => {
    try {
        const { business_name, business_type, email } = req.body;
        if (!business_name || !business_type || !email) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const sql = "INSERT INTO applications (business_name, business_type, email) VALUES (?, ?, ?)";
        const [result] = await req.db.query(sql, [business_name, business_type, email]);
        res.json({ message: "Application submitted successfully!", insertId: result.insertId });
    } catch (error) {
        console.error("Database Error:", error);
        res.status(500).json({ error: "Database insertion failed" });
    }
});

// ✅ Attach file upload routes
app.use("/api", uploadRoutes);

// ✅ Test DB Route
app.get("/test-db", async (req, res) => {
    try {
        const [results] = await req.db.query("SHOW TABLES");
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Root API check
app.get("/", (req, res) => {
    res.send("API is working!");
});

// ✅ Start Server after DB Connection
async function startServer() {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
}

startServer();
