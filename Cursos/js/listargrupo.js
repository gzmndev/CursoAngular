
var grupos = document.querySelector('#grupos');
var url = "https://paginas-web-cr.com/ApiPHP/apis/";
var listar = "ListaGrupo.php";
var eliminar = "BorrarGrupo.php";
var actualizar = "ActualizarGrupo.php";
const myModal = new bootstrap.Modal(document.getElementById('modalId'));
const myModalEditar = new bootstrap.Modal(document.getElementById('modalEditar'));

function cargardatos() {
    var urllistar = url + listar;


    fetch(urllistar)
        .then(repuesta => repuesta.json())
        .then((datosrepuesta) => {
            pintandotabla(datosrepuesta.data)
        }
        )
        .catch(console.log);
}

function pintandotabla(datos) {


    for (const registro of datos) {

        grupos.innerHTML +=
            `<tr class="">
            <td scope="row">${registro.id}</td>
            <td>${registro.nombre}</td>
            <td class="table-secondary">
            <a onclick="mostrarEditar('${registro.id}', '${registro.nombre}')" name="" id="" class="btn btn-warning" href="#" role="button">Editar</a>
            ||
            <a onclick="mostraIdEliminar('${registro.id}')" name="" id="" class="btn btn-danger" href="#" role="button">Eliminar</a>
            </td>
        </tr>`;
    }
}

function mostraIdEliminar(id) {
    document.getElementById("idEliminar").value = id;
    document.getElementById("idResultado").innerHTML = id;
    myModal.show();
}

function mostrarEditar(id, nombre) {
    document.getElementById("id").value = id;
    document.getElementById("nombre").value = nombre;
    myModalEditar.show();
}

function eliminarId() {
    var id = document.getElementById("idEliminar").value;

    var urleliminar = url + eliminar;


    var datosenviar =
    {
        id: id
    };

    fetch(urleliminar,
        {
            method: 'POST',
            body: JSON.stringify(datosenviar)
        })
        .then(repuesta => repuesta.json())
        .then((datosrepuesta) => {
            console.log(datosrepuesta)
            recargarTabla()
        }
        )
        .catch(console.log);
}

function recargarTabla() {
    myModal.hide();
    myModalEditar.hide();
    grupos.innerHTML = ``;
    cargardatos();
}

function editar() {

    var id = document.getElementById("id").value;
    var nombre = document.getElementById("nombre").value;

    var urlActualizar = url + actualizar;


    var datosenviar =
    {
        id: id,
        nombre: nombre
    };

    fetch(urlActualizar,
        {
            method: 'POST',
            body: JSON.stringify(datosenviar)
        })
        .then(repuesta => repuesta.json())
        .then((datosrepuesta) => {
            console.log(datosrepuesta)
            recargarTabla()
        }
        )
        .catch(console.log);
}


cargardatos();