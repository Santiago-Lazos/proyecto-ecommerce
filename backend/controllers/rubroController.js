const conexion = require('../database/conexion');

const getAllRubros = (req, res) => {
  const query = 'SELECT * FROM rubros';
  conexion.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener rubros' });
    }
    res.json(results);
  });
};

module.exports = {
  getAllRubros
};
