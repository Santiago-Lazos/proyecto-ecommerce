const mysql = require('mysql2');

const conexion = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  password: 'yateladije2024', 
  database: 'ecommerce_api'
});

conexion.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

module.exports = conexion;
