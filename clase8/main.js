function main() {
    fetch("https://taller-cardumen.herokuapp.com/peliculas")
        .then(res => res.json())
        .then(response =>{
            console.log(response);
            response.data.forEach(element => {
                var contenedor = document.createElement('div');
                contenedor.classList = "col-md-3";
                var title = document.createElement('h4');
                var img = document.createElement('img');
                var year = document.createElement("p");
                var genero = document.createElement("p");
                var btn = document.createElement("a");

                title.innerText = element.title;
                img.src = element.img;
                img.classList = "img-fluid";
                year.innerText = element.year;
                genero.innerText = element.genders.join(' - ');
                btn.innerText = "Ver más";
                btn.classList = "btn btn-primary";
                btn.href = "info.html?id=" + element.id;

                contenedor.appendChild(title);
                contenedor.appendChild(img);
                contenedor.appendChild(genero);
                contenedor.appendChild(year);
                contenedor.appendChild(btn);

                var peliculas = document.getElementById('peliculas');

                peliculas.appendChild(contenedor);
            });
        })
}

document.addEventListener("DOMContentLoaded", main);