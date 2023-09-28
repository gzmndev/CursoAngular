var registroprofesor =  document.getElementById('registroprofesor');
var url = "https://paginas-web-cr.com/ApiPHP/apis/";
var insertar = "InsertarProfesores.php";


registroprofesor.addEventListener('submit', function(e){
    e.preventDefault();

    var cedula = document.getElementById('cedula').value;
    var correoelectronico = document.getElementById('correoelectronico').value;
    var telefono = document.getElementById('telefono').value;
    var telefonocelular = document.getElementById('telefonocelular').value;
    var fechanacimiento = document.getElementById('fechanacimiento').value;
    var sexo = document.getElementById('sexo').value;
    var direccion = document.getElementById('direccion').value;
    var nombre = document.getElementById('nombre').value;
    var apellidopaterno = document.getElementById('apellidopaterno').value;
    var apellidomaterno = document.getElementById('apellidomaterno').value;
    var nacionalidad = document.getElementById('nacionalidad').value;
    var idCarreras = document.getElementById('idCarreras').value;
    var usuario = document.getElementById('usuario').value;


    var datos = {
        cedula: cedula,
        correoelectronico: correoelectronico,
        telefono: telefono,
        telefonocelular: telefonocelular,
        fechanacimiento: fechanacimiento,
        sexo: sexo,
        direccion: direccion,
        nombre: nombre,
        apellidopaterno: apellidopaterno,
        apellidomaterno: apellidomaterno,
        nacionalidad: nacionalidad,
        idCarreras: idCarreras,
        usuario: usuario
    }

    var urlinsertar = url + insertar;
    

    fetch(urlinsertar,
        {
            method: "POST",
            body: JSON.stringify(datos)
        }
        
        )//solicitud a la url
    .then(repuesta => repuesta.json())//solicita que todo sea json
    .then((datosrepuesta) =>
        {
            console.log(datosrepuesta);
        }
    )//los datos recibidos
    .catch(console.log);//los posibles errores

 

    alert("Salvando");

    window.location = 'listarprofesor.html';



}

);