loadmenus.innerHTML +=
`
<ul class="nav nav-tabs" id="navId" role="tablist">
    <li class="nav-item">
        <a href="index.html" class="nav-link active" data-bs-toggle="tab" aria-current="page">Active</a>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Cursos</a>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="listarcurso.html">Listar</a>                                
            <a class="dropdown-item" href="crearcurso.html">Crear</a>
        </div>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Profesores</a>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="listarprofesores.html">Listar Profesores</a>                                
            <a class="dropdown-item" href="#">Crear</a>
        </div>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Estudiantes</a>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="listarestudiante.html">Listar Estudiantes</a>                                
            <a class="dropdown-item" href="#">Crear</a>
        </div>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Grupos</a>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="listargrupos.html">Listar Grupos</a>                                
            <a class="dropdown-item" href="#">Crear</a>
        </div>
    </li>
    <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Usuarios</a>
    <div class="dropdown-menu">
        <a class="dropdown-item" href="listarcurso.html">Listar</a>                                
        <a class="dropdown-item" href="crearcurso.html">Crear</a>
    </div>
</li>
</ul>    
`;