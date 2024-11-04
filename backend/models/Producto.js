class Producto {
    constructor(codigo, descripcion, rubro, precio, url_imagen) {
      this.codigo = codigo;
      this.descripcion = descripcion;
      this.rubro = rubro;
      this.precio = precio;
      this.url_imagen = url_imagen;
    }
  }
  
module.exports = Producto;

class Rubro {
constructor(codigo, descripcion) {
    this.codigo = codigo;
    this.descripcion = descripcion;
    }
}
  
module.exports = Rubro;
  
  