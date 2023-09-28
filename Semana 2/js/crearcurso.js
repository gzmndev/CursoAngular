var registronotas =  document.getElementById('registronotas');
var url = "https://paginas-web-cr.com/ApiPHP/apis/";
var insertar = "InsertarCursos.php";


registronotas.addEventListener('submit', function(e){
    e.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var descripcion = document.getElementById('descripcion').value;
    var tiempo = document.getElementById('tiempo').value;
    var usuario =  'Prof Mario';


    var datos = {
        nombre: nombre,
        descripcion: descripcion,
        tiempo: tiempo,
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

    window.location = 'listarcurso.html';



}

);