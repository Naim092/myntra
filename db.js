const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  port: 3307,
  database: "myntraa",
});

module.exports = conn;