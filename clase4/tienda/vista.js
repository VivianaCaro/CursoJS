function Vista (elemento) {
    this.storage = this.validarStorage();
    this.contenedor = elemento;
    this.crearVista(this.contenedor);
}
/**
 * Obtiene el arreglo almacenado en LocalStorage, arreglo: productos
 */
Vista.prototype.getStorage = function() {
    return JSON.parse(window.localStorage.getItem('productos'));
}

Vista.prototype.setStorage = function(arregloProductos) {
    window.localStorage.setItem('productos', JSON.stringify(arregloProductos));
}

Vista.prototype.validarStorage = function () {
    if(this.getStorage() == null) {
        this.setStorage([]);
        return this.getStorage();
    } else {
        return this.getStorage();
    }
}

// Se usará TemplateString
Vista.prototype.crearVista = function(contenedor) {
    // iteramos el array de productos
    this.storage.forEach(function(item, index) {
        var li = document.createElement('li');
        var template = `<span>
                            <img src="${item.imagen}" />
                        </span>
                        <span>
                            <h3>${item.titulo}</h3>
                            <p>${item.descripcion}</p>
                            <strong>$ ${item.precio}</strong>
                        </span>`; 
    
        li.innerHTML = template;
        contenedor.appendChild(li);
    });
}