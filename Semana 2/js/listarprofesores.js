
var profesores = document.querySelector('#profesores');
var url = "https://paginas-web-cr.com/ApiPHP/apis/";
var listar = "ListaProfesores.php";


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
        
        profesores.innerHTML +=
        `<tr class="">
            <td scope="row">${registro.id}</td>
            <td>${registro.cedula}</td>
            <td>${registro.correoelectronico}</td>
            <td>${registro.telefono}</td>
            <td>${registro.telefonocelular}</td>
            <td>${registro.fechanacimiento}</td>
            <td>${registro.sexo}</td>
            <td>${registro.direccion}</td>
            <td>${registro.nombre}</td>
            <td>${registro.apellidopaterno}</td>
            <td>${registro.apellidomaterno}</td>
            <td>${registro.idCarreras}</td>
            <td>${registro.usuario}</td>
            <td>${registro.nacionalidad}</td>
        </tr>`;
    }
}

cargardatos();