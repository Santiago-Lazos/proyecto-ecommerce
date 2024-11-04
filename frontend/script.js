document.addEventListener('DOMContentLoaded', async () => {

  try {
    const rubroResponse = await fetch('http://localhost:3000/api/rubros');
    const rubros = await rubroResponse.json();
    const rubroSelect = document.getElementById('rubro-select');

    rubros.forEach(rubro => {
      const option = document.createElement('option');
      option.value = rubro.Codigo;
      option.textContent = rubro.Descripcion;
      rubroSelect.appendChild(option);
    });
  } catch (error) {
    console.error('Error al cargar rubros:', error);
  }

  cargarProductos();

  document.getElementById('rubro-select').addEventListener('change', cargarProductos);
  document.getElementById('search').addEventListener('input', cargarProductos);
  document.getElementById('vista-cambiar').addEventListener('click', () => {
  document.getElementById('productos-container').classList.toggle('cuadricula');
  });
});

async function cargarProductos() {
  const rubro = document.getElementById('rubro-select').value;
  const descripcion = document.getElementById('search').value;
  try {
    const response = await fetch(`http://localhost:3000/api/productos?${rubro ? `rubro=${rubro}&` : ''}${descripcion ? `descripcion=${descripcion}` : ''}`);
    const productos = await response.json();
    const productosContainer = document.getElementById('productos-container');
    productosContainer.innerHTML = '';

    productos.forEach(producto => {
      const productoElement = document.createElement('div');
      productoElement.classList.add('producto');
      productoElement.innerHTML = `
        <h3>${producto.Descripcion}</h3>
        <p>Precio: $${producto.Precio}</p>
        <img src="${producto.url_imagen}" alt="${producto.Descripcion}">
      `;
      productosContainer.appendChild(productoElement);
    });
  } catch (error) {
    console.error('Error al cargar productos:', error);
  }
}
