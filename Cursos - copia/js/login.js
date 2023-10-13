var url = "https://paginas-web-cr.com/ApiPHP/apis/";
var autenticar = "AutenticarUsuario.php";

function login2() {


    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;
    var urlAutenticar = url + autenticar;

    //Armo el arreglo
    var datos =
    {
        email: email,
        password: password

    };
    debugger;
    fetch(urlAutenticar,
        {
            method: 'POST',
            body: JSON.stringify(datos)
        })//solicitud a la url
        .then(repuesta => repuesta.json())//solicita que todo sea json
        .then((datosrepuesta) => {
            console.log(datosrepuesta)
            window.location = 'listarcurso.html';

        }
        )//los datos recibidos
        .catch(console.log(datosrepuesta));//los posibles errores


}

function login() {

    //Mapea los valores de los inputs

    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;
    var urlAutenticar = url + autenticar;






    //Crea el arreglo que requiere el API

    var datosenviar =

    {

        email: email,

        password: password

    };

    // Ejecuta la accion en el API

    fetch(urlAutenticar,

        {
            method: 'POST',
            body: JSON.stringify(datosenviar)

        })//solicitud a la url

        .then(repuesta => repuesta.json())//solicita que todo sea json

        .then((datosrepuesta) => {
            setTimeout(3000);
            if (datosrepuesta.data) {
                console.log(datosrepuesta);
                
                window.location='index.html';
            }
            else{
                console.log(datosrepuesta);
                alert("ERRROR");
            }

                



            // myModalAutenticar.hide();

            //recargarTabla();

        }

        )//los datos recibidos

        .catch(console.log);//los posibles errores

}