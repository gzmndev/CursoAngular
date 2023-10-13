var namepage = document.title;

var activeListarCurso = '';
var activeCrearCurso = '';

if ("Listar Curso" == namepage){
    activeListarCurso = 'active';
}

if ("Crear Curso" == namepage){
    activeCrearCurso = 'active';
}

loadmenus.innerHTML +=
`
<ul class="nav nav-tabs" id="navId" role="tablist">
    <li class="nav-item">
        <a href="index.html" class="nav-link" data-bs-toggle="tab" aria-current="page">Active</a>
    </li>
    <li class="nav-item">
        <a href="https://paginas-web-cr.com/ApiPHP/" class="nav-link" data-bs-toggle="tab" aria-current="page">API</a>
    </li>    
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Cursos</a>
        <div class="dropdown-menu">
            <a class="dropdown-item ${activeListarCurso}" href="listarcurso.html">Listar</a>                                
            <a class="dropdown-item ${activeCrearCurso}" href="crearcurso.html">Crear</a>
        </div>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Usuarios</a>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="listarusuario.html">Listar</a>                                
            <a class="dropdown-item" href="crearusuario.html">Crear</a>
        </div>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Profesor</a>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="listarprofesor.html">Listar</a>                                
            <a class="dropdown-item" href="crearprofesor.html">Crear</a>
        </div>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Estudiante</a>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="listarestudiante.html">Listar</a>                                
            <a class="dropdown-item" href="crearestudiante.html">Crear</a>
        </div>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Grupo</a>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="listargrupo.html">Listar</a>                                
            <a class="dropdown-item" href="creargrupo.html">Crear</a>
        </div>
    </li>            
    
</ul>    
`;