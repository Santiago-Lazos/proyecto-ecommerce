const conexion = require('../database/conexion');

const Rubro = {};

Rubro.obtenerTodos = (callback) => {
    const sql = 'SELECT * FROM Rubros';
    conexion.query(sql, callback);
};

module.exports = Rubro;
