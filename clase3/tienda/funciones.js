//Funciones principales del sitio

function nuevoProducto (nombre, desc, img, precio) {
    let producto = {
        nombre: nombre, //propiedad: valor del parametro recibido en la funcion
        descripcion: desc,
        imagen: img,
        precio: precio
    }

    agregarProducto(producto); // es como push de array
}

// funciones para manejar el localstorage

// retorna como string
function getStorage() {
    return JSON.parse(window.localStorage.getItem('productos'));
}

// guarda en localstorage, recibe parametro string
function setStorage(arregloProductos) {
    window.localStorage.setItem('productos', JSON.stringify(arregloProductos));
}

function agregarProducto (producto) {
    // traemos el array con los datos almacenados en LocalStorage
    var nuevoArregloProductos = getStorage();
    // agregamos el objeto al arreglo obtenido desde LS
    nuevoArregloProductos.push(producto);
    // guardamos los datos en LS con el nuevo objeto producto
    setStorage(nuevoArregloProductos);
}

function validarStorage() {
    if(getStorage() == null) {
        // insertamos un array vacío, pero no es null
        setStorage([]);
        return getStorage();
    } else {
        return getStorage();
    }
}

// el profe le dice "renderView"
function crearVista (arreglo) {
    var ul = document.getElementById('productosLista');
    //tip: con query selector # si es id, . si es por clase
    //var ul = document.querySelector('#productosLista');

    ul.innerHTML = '';
    // iteramos el array de productos
    arreglo.forEach(function(item, index){
        // creamos elementos/estructura de como sera el html del producto
        var li = document.createElement('li');
        var col1 = document.createElement('span');
        var col2 = document.createElement('span');
        var img = document.createElement('img');
        var titulo = document.createElement('h3');
        var desc = document.createElement('p');
        var precio = document.createElement('strong');

        // seteamos atributos de los elementos
        titulo.innerText = item.nombre;
        desc.innerText = item.descripcion;
        precio.innerText = '$ ' + item.precio;
        img.src = item.imagen;

        // tip: agrega clases al elemento, se puede usar para agregar estilos
        // img.classList.add("");

        // insertamos los elementos en el DOM
        // se deben llenar antes los elementos "mas internos"
        col1.appendChild(img);
        col2.appendChild(titulo);
        col2.appendChild(desc);
        col2.appendChild(precio);

        li.appendChild(col1);
        li.appendChild(col2);

        // agrega el producto a la lista de los elementos 
        ul.appendChild(li);
    });
}