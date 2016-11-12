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
        //se crea un span para usarlo como caja de las listas, unir un span aj div js
        var spanL= document.createElement("espan");
        cajaJs.appendChild(spanL);
        //unir la caja js al html
        cajaHtml.appendChild(cajaJs);

        botonUno.appendChild(textBoton);
       //le doy a el boton una funcion llamada listaDos cuando se aprete el boton
        botonUno.onclick= listaDos;
        //la funcion saca lo que escribe el ususario y lo mete a un span que se creo arriba
        function listaDos(){
        var letras= inputSegundo.value;
        var cajLetras= document.createTextNode(inputSegundo.value);
        spanL.appendChild(cajLetras);
        }
    //});
        /*botonUno.addEventListener("click", function(event){
        agregarTarea(this);
        });

        function agregarTarea(){
    //saco lo que el usuario ingresa 
    var contenido= inputSegundo.value;
    //creo un contenedor en js `para meter el contenido
    var boxUno= document.createElement("div");
    boxUno.setAttribute("class" , "tit");
    //introducrir el contenido al div
    boxUno.appendChild(contenido);
    cajaHtml.appendChild(boxUno);
}*/

}
//2 cuando aprete guardar muestre lo ingresado titulo al lado
