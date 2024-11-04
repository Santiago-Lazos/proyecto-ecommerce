const express = require('express');
const cors = require('cors');
const productosRoutes = require('./routes/productos');
const rubrosRoutes = require('./routes/rubro');

const app = express();

// Middleware
app.use(cors()); 
app.use(express.json()); 

// Rutas
app.use('/api/productos', productosRoutes);
app.use('/api/rubros', rubrosRoutes);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
