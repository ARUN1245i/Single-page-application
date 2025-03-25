const mysql = require("mysql2");
require("dotenv").config();

// MySQL Database Configuration
const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "sample"
};

// Create a MySQL Connection Pool
const pool = mysql.createPool({
  ...dbConfig,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Initialize Database Connection
async function initDB() {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("❌ DB Connection Error:", err.message);
    } else {
      console.log("✅ MySQL DB connected successfully!");
      connection.release();
    }
  });
}

// Get Connection from Pool
function getConnection(callback) {
  pool.getConnection((err, connection) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, connection);
  });
}

module.exports = { initDB, getConnection };
