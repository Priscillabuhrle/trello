//1
function aparecer(){
	//identifico al input del html, al que aparece primero
    var divPrimero= document.getElementById("todo");

    //le digo que ocurra esto cuando se aprete (se vea el input y boton)
   // divPrimero.addEventListener("click", function agregarInput(){
        //identifico al div contenedor
        var cajaHtml= document.getElementById("cajaMadre");
        //creo al div contenedor del js
        var cajaJs= document.createElement("div");
        cajaJs.setAttribute("class" , "contenedorJs");
        //creo un input
        var inputSegundo= document.createElement("textarea");
        //le doy una clase al input
        inputSegundo.setAttribute("class" , "meter");
        //esto del col y row es esclusivo del text area
        inputSegundo.cols= 25;
        inputSegundo.row=2;
        //voy a crear un boton
        var botonUno= document.createElement("button");
        //le voy a dar estilo al boton ???
        botonUno.setAttribute("type" , "btn-primary");
        botonUno.setAttribute("class" , "btnTrello");
        //crear texto del boton
        var textBoton= document.createTextNode("Guardar");
        //unir el input al div js

        //unir el boton a la caja js
        
        cajaJs.appendChild(inputSegundo);
        cajaJs.appendChild(botonUno);
        //unir la caja js al html
        cajaHtml.appendChild(cajaJs);

        botonUno.appendChild(textBoton);
    //});
}
//2
