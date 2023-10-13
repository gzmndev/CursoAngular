
var calificaciones = document.querySelector('#estudiantes');
var url = "https://paginas-web-cr.com/ApiPHP/apis/";
var listar = "ListaEstudiantes.php";
var eliminar = "BorrarEstudiantes.php";
var actualizar = "ActualizarEstudiantes.php";
const myModal = new bootstrap.Modal(document.getElementById('modalId'));
const myModalEditar = new bootstrap.Modal(document.getElementById('modalEditar'));


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
        
        estudiantes.innerHTML +=
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
            <td>${registro.nacionalidad}</td>
            <td>${registro.idCarreras}</td>
            <td>${registro.usuario}</td>
            <td class="table-secondary">
            <a onclick="mostrarEditar('${registro.id}','${registro.cedula}','${registro.correoelectronico}','${registro.telefono}','${registro.telefonocelular}','${registro.fechanacimiento}','${registro.sexo}','${registro.direccion}','${registro.nombre}','${registro.apellidopaterno}','${registro.apellidomaterno}','${registro.nacionalidad}','${registro.idCarreras}','${registro.usuario}')" name="" id="" class="btn btn-warning" href="#" role="button">Editar</a>
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
    setTimeout(6000);
    myModal.hide();
    myModalEditar.hide();
    calificaciones.innerHTML = ``;
    cargardatos();
}

function mostrarEditar(id,cedula, correoelectronico, telefono, telefonocelular,fechanacimiento,sexo,direccion,nombre
   ,apellidopaterno,apellidomaterno,nacionalidad,idCarreras,usuario ){  
   debugger;
    //document.getElementById("usuario").value = nombre; 
    //document.getElementById("idResultado").innerHTML = id; 
    document.getElementById("id").value= id;
    document.getElementById("cedula").value=cedula; 
    document.getElementById("correoelectronico").value=correoelectronico; 
    document.getElementById("telefono").value=telefono;
    document.getElementById("telefonocelular").value=telefonocelular;
    document.getElementById("fechanacimiento").value=fechanacimiento;
    document.getElementById("sexo").value=sexo;
    document.getElementById("direccion").value=direccion;
    document.getElementById("nombre").value=nombre;
     document.getElementById("apellidopaterno").value=apellidopaterno;
    document.getElementById("apellidomaterno").value=apellidomaterno;
    document.getElementById("nacionalidad").value=nacionalidad;
    document.getElementById("idCarreras").value=idCarreras;
    document.getElementById("usuario").value=usuario;
    myModalEditar.show();
}

function editar(){
    debugger;
    var id = document.getElementById("id").value;
    var cedula= document.getElementById("cedula").value ; 
    var correoelectronico =document.getElementById("correoelectronico").value ; 
    var telefono = document.getElementById("telefono").value;
    var telefonocelular = document.getElementById("telefonocelular").value;
    var fechanacimiento = document.getElementById("fechanacimiento").value;
    var sexo = document.getElementById("sexo").value;
    var direccion = document.getElementById("direccion").value;
    var nombre = document.getElementById("nombre").value;
    var apellidopaterno = document.getElementById("apellidopaterno").value;
    var apellidomaterno = document.getElementById("apellidomaterno").value;
    var nacionalidad = document.getElementById("nacionalidad").value;
    var idCarreras = document.getElementById("idCarreras").value;
    //var usuario = document.getElementById("usuario").value;
   



    var urlActualizar = url + actualizar;

    //Armo el arreglo
    var datosenviar =
        { 
    id :id,
    cedula :cedula,
    correoelectronico :correoelectronico,
    telefono :telefono,
    telefonocelular : telefonocelular,
    fechanacimiento :fechanacimiento,
    sexo : sexo,
    direccion : direccion,
    nombre:nombre,
    apellidopaterno :apellidopaterno,
    apellidomaterno:apellidomaterno, 
    nacionalidad :nacionalidad,
    idCarreras :idCarreras,   
    usuario: "auguzman"
        };

    fetch(urlActualizar, 
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

cargardatos();