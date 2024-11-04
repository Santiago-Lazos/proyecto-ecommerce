const conexion = require('../database/conexion');

// Controlador para obtener productos con filtros
const getAllProductos = (req, res) => {
  const { descripcion, rubro } = req.query;
  let query = 'SELECT * FROM productos WHERE 1=1';
  const params = [];

  if (descripcion) {
    query += ' AND Descripcion LIKE ?';
    params.push(`%${descripcion}%`);
  }
  if (rubro) {
    query += ' AND Rubro = ?';
    params.push(rubro);
  }

  conexion.query(query, params, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener productos' });
    }
    res.json(results);
  });
};

// Controlador para obtener un producto por ID
const getProductoById = (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM productos WHERE Codigo = ?';
  conexion.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener el producto' });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(result[0]);
  });
};

module.exports = {
  getAllProductos,
  getProductoById
};
