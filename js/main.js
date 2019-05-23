
var listaCursos = [
    [1, "Curso de JavaScript", 150.00, "https://static.platzi.com/media/achievements/1197-244dd89b-f37d-4c0b-993e-7e13a59e103f.png"],
    [2, "Curso de React", 130.00, "https://static.platzi.com/media/achievements/badge-reactjs-avanzado-bc9f61e9-9a1a-485b-b0ad-43a172cdb0aa.png"],
    [3, "Curso de Java", 250.00, "https://static.platzi.com/media/achievements/1222-434ce348-c008-4386-b0fc-edc18b8ec5e7.png"],
    [4, "Curso de HTML y CSS3", 400.00, "https://static.platzi.com/media/achievements/badges-html-css-b0a71550-d5e7-4e27-aca2-f09f1321a517.png"],
    [5, "Curso de Python", 180.00, "https://static.platzi.com/media/achievements/1378-6fbee8c2-fb79-45db-bd28-d25878a0104c.png"],
    [6, "Curso de Angular", 95.00, "https://static.platzi.com/media/achievements/1340-7609a8dc-f858-4863-abeb-02a7dbbf59c1.png"],
    [7, "Curso de PostgreSQL", 190.00, "https://static.platzi.com/media/achievements/badges-postgresql-2b631b5d-dcf4-4eec-8766-cea5196eb327.png"],
    [8, "Curso de Android", 250.00, "https://static.platzi.com/media/achievements/1049-ccf7d815-1c7d-4e1e-8cd4-d50369c96c7c.png"]
];

var carrito = [];

$(document).ready(function () {
    listarCursos();
});

function listarCursos() {
    $(".lista-cursos").html("");
    listaCursos.forEach(c => {
        curso = '<div class="col-3">';
        curso +=    '<div class="card">';
        curso +=        '<img src="' + c[3] + '" alt="curso" class="card-img-top">';
        curso +=        '<div class="card-body">';
        curso +=            '<span>' + c[1] + '</span>';
        curso +=            '<h5>S/ ' + c[2] + '</h5>';
        curso +=            '<p class="card-text">Descripción</p>'
        curso +=            '<center><button class="btn btn-primary btnAgregar" onclick="agregar(' + c[0] + ')" id="' + c[0] + '">Agregar al carrito</button></center>';
        curso += '</div></div></div>';
        $(".lista-cursos").append(curso);
    });
}

function agregar(id) {
    carrito.push(listaCursos[id - 1]);
    document.getElementById(id.toString()).disabled = true;
    document.getElementById(id.toString()).innerHTML = "Agregado";
    mostrarCarrito();
}

function mostrarCarrito() {
    $("#tblDatos").html("");
    if (carrito.length != 0) {
        carrito.forEach(producto => {
            p = '<tr>';
            p +=    '<td>' + producto[1] + '</td>';
            p +=    '<td> S/ ' + producto[2] + '</td>';
            p +=    '<td><button class="btn btn-danger btn-sm">X</button></td>';
            p += '</tr>';
            $("#tblDatos").append(p);
        });
        
    }
}