
var calificaciones = document.querySelector('#calificaciones');
var url = "https://paginas-web-cr.com/ApiPHP/apis/";
var listar = "ListaGrupo.php";
var eliminar = "BorrarGrupo.php";
const myModal = new bootstrap.Modal(document.getElementById('modalId'));


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
            <td scope="row">${registro.id}</td>
            <td>${registro.nombre}</td>
            <td class="table-secondary">
                <a onclick="editar('${registro.id}', '${registro.nombre}')" name="" id="" class="btn btn-warning" href="#" role="button">Editar</a>
                ||
                <a onclick="mostraIdEliminar('${registro.id}')" name="" id="" class="btn btn-danger" href="#" role="button">Eliminar</a>
            </td>
        </tr>`;
    }
}

function mostraIdEliminar(id){   
    document.getElementById("idEliminar").value = id; 
    document.getElementById("idResultado").innerHTML = id; 
    myModal.show();
}

function eliminarId(){
    var id = document.getElementById("idEliminar").value;
    
    var urleliminar = url + eliminar;

    //Armo el arreglo
    var datosenviar =
        { 
            id:id 
        };

    fetch(urleliminar, 
        {
            method:'POST',
            body: JSON.stringify(datosenviar)
        })//solicitud a la url
    .then(repuesta => repuesta.json())//solicita que todo sea json
    .then((datosrepuesta) =>
        {
            console.log(datosrepuesta)
            recargarTabla()
        }
    )//los datos recibidos
    .catch(console.log);//los posibles errores
}

function recargarTabla(){
    myModal.hide();
    grupos.innerHTML = ``;
    cargardatos();
}

function editar(id, nombre){
    alert("editar");
}


cargardatos();