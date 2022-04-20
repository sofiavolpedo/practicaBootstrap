/* JQUERY
para esperar q termine de cargar
$(document).ready(function(){


});

RESUMIDO:
$(function(){

    $("p").css({"background-color": "red"});
    $("button").click(function(){
        alert("hola")
    });




});

*/

$(function(){

    $("button").click(function(){
        $("#contenido").toggle(1000);
    })

});