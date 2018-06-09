// La idea es hacer la misma tienda de clase 3, pero con prototipos
function Producto(nombre,descripcion,img,precio) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = img;
    this.precio = precio;
    this.storage = this.validarStorage(); // se ejecuta cada vez que se crea el objeto
}

Producto.prototype.getStorage = function() {
    return JSON.parse(window.localStorage.getItem('productos'));
}

Producto.prototype.setStorage = function(arregloProductos) {
    window.localStorage.setItem('productos', JSON.stringify(arregloProductos));
}

Producto.prototype.validarStorage = function () {
    if(this.getStorage() == null) {
        this.setStorage([]);
        return this.getStorage();
    } else {
        return this.getStorage();
    }
}

Producto.prototype.guardar = function() {
    let producto = {
        nombre: this.nombre, //propiedad: valor del parametro recibido en la funcion
        descripcion: this.descripcion,
        imagen: this.imagen,
        precio: this.precio
    }

    this.storage.push(producto);
    this.setStorage(this.storage);
}