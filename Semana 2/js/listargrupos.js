
var grupos = document.querySelector('#calificaciones');
var url = "https://paginas-web-cr.com/ApiPHP/apis/";
var listar = "ListaGrupo.php";


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
        
        grupos.innerHTML +=
        `<tr class="">
            <td id="id" scope="row">${registro.id}</td>
            <td>${registro.nombre}</td>
            <td>
                <a name="" id="" class="btn btn-warning" href="#" role="button">Editar</a>
                ||
                <a name="" id="" class="btn btn-danger" href="#" role="button">Eliminar</a>
            </td>
        </tr>
        `;
    }
}

cargardatos();