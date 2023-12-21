const mysql = require('mysql2');
require('dotenv').config();

/* Conexiones */
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

/* Testeo de conexión */
pool.getConnection((error, connection) => {
  if (error) {
    console.error('Hubo error de conexión: ' , error);
  } else {
    console.log('Conexión exitosa Funkoshop');
    connection.release();
  }

});

module.exports = {
  conn: pool.promise()
};
