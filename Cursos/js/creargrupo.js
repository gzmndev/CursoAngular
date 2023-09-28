var registrogrupo =  document.getElementById('registrogrupo');
var url = "https://paginas-web-cr.com/ApiPHP/apis/";
var insertar = "InsertarGrupo.php";


registrogrupo.addEventListener('submit', function(e){
    e.preventDefault();

    var nombre = document.getElementById('nombre').value;

    var datos = {
        nombre: nombre
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

    window.location = 'listargrupo.html';

}

);