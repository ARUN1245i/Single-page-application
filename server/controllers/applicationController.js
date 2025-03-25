const { getConnection } = require("../config/db");

async function getUser(req, res) {
  let connection;
  try {
    connection = await getConnection();
    const result = await connection.execute(
      `SELECT * FROM users WHERE email = :email`,
      { email: req.body.email }
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).send("Database error: " + err.message);
  } finally {
    if (connection) await connection.close();
  }
}

module.exports = { getUser };
