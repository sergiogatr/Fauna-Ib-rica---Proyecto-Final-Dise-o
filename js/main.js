
// Cambio de Imagenes
$("div > img").click(function(){
    let ruta = $(this).attr("src");
    let padre = $(this).parent().prev();
    console.log(padre)

    let ruta2 = $(this).parent().prev().attr("src");

    $(this).attr("src", ruta2);
    $(padre).attr("src", ruta);
});


// Foco Imagen
$("section > div > img").dblclick(function(){

    var ww = window.innerWidth;
    var wh = window.innerHeight;
    
    $("#foco").css("width", ww/2);
    $("#foco").height(wh/2);
    
    $("#foco").css({"top" : wh/4, "left" : ww/4})



    let ruta = $(this).attr("src");
    let info = $(this).attr("alt");

    $("#foco").css("background-image", "url(" + ruta + ")");
    $("#foco > p").text(info);
    $("#foco").css("display", "block");
});

$("#foco > img").click(function(){
    $("#foco").css("display", "none");
});
