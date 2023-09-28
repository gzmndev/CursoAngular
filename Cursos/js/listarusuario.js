
var calificaciones = document.querySelector('#calificaciones');
var url = "https://paginas-web-cr.com/ApiPHP/apis/";
var listar = "ListaUsuarios.php";


function cargardatos() {
    var urllistar = url + listar;
    //console.log(urllistar);

    fetch(urllistar)
    .then(repuesta => repuesta.json())
    .then((datosrepuesta) =>
        {
            pintandotabla(datosrepuesta.data)
        }
    )
    .catch(console.log);
}

function pintandotabla(datos){
    //console.log("1" + datos)

    for (const registro of datos) {
        
        usuarios.innerHTML +=
        `<tr class="">
            <td scope="row">${registro.id}</td>
            <td>${registro.name}</td>
            <td>${registro.email}</td>
            <td>${registro.password}</td>
        </tr>`;
    }
}

cargardatos();