function main() {
    var title = document.getElementById("titulo");
    var categorias = document.getElementById("categorias");
    var year = document.getElementById("year");
    var productora = document.getElementById("productora");
    var director = document.getElementById("director");
    var pais = document.getElementById("pais");
    var descripcion = document.getElementById("descripcion");
    var trailer = document.getElementById("trailer");
    var img = document.getElementById("img");

    fetch("https://taller-cardumen.herokuapp.com/peliculas/" + getParametros())
        .then(res => res.json())
        .then(response => {
            var el = response.data;
            title.innerText = el.title;
            categorias.innerText = el.genders.join(" - ");
            year.innerText = el.year;
            productora.innerText = el.productora;
            director.innerText = el.director;
            pais.innerText = el.pais;
            descripcion.innerText = el.description;
            trailer.src = el.trailer;
            img.src = el.img;

        })

}

function getParametros() {
    var url = window.location.href;
    var params = url.split('?')[1];
    var id = params.split('=')[1];
    return id;

}

document.addEventListener("DOMContentLoaded", main);