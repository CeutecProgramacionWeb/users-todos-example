$(document).ready(function () {
    loadUsers();
    $(document).on("click", ".btn-info", function () {
        let userId = $(this).attr("data-val-id");
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/todos?userId=${userId}`,
            type: "GET",
            success: function (data) {
                $(".container").html(` <div class="card"> <div class="card-body"> <h1 class="card-title"> To Do's </h1> <div class="card-text"> <div class="table-responsive"> <table class="table table-hover"> <thead> <tr> <td> Titulo </td> <td> Completado </td> </tr> </thead> <tbody id="table-body"> </tbody> </table> </div> <button id="regresar" class="btn btn-primary">Regresar</button> </div> </div> </div>`);
                $(data).each(function (index, element) {
                    $("#table-body").append(`<tr><td>${element.userId}</td><td>${element.title}</td><td>${element.completed}</td></tr>`);
                });
            }
        });
    });
    $(document).on("click", "#regresar", function () {
        $(".container").html(`<div class="card"> <div class="card-body"> <h1 class="card-title"> Users </h1> <div class="card-text"> <div class="table-responsive"> <table class="table table-hover"> <thead> <tr> <td> Name </td> <td> Username </td> <td> Company Name </td> <td> Tareas </td> </tr> </thead> <tbody id="table-body"> </tbody> </table> </div> </div> </div> </div>`);
        loadUsers();
    });
});

function loadUsers() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        type: "GET",
        success: function (data) {
            $(data).each(function (index, element) {
                $("#table-body").append(`<tr><td>${element.name}</td><td>${element.username}</td><td>${element.company.name}</td><td><button data-val-id=${element.id} class='btn btn-info'> Ver </button> </td></tr>`);
            });
        },
        error: function (err) {
            console.error(`algo salio mal ${err}`);
        }
    });
}