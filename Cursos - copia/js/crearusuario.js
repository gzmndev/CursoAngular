var registrousuario =  document.getElementById('registrousuario');
var url = "https://paginas-web-cr.com/ApiPHP/apis/";
var insertar = "InsertarUsuarios.php";


registrousuario.addEventListener('submit', function(e){
    e.preventDefault();

    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;

    var datos = {
        name: name,
        password: password,
        email: email
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

    window.location = 'listarusuario.html';



}

);