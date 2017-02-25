
//**************************************************************************************************** 
//Después de cargar la página (onload) se definen los eventos sobre los elementos, entre otras acciones.

window.onload = function(){ 
 
 //LEER XML de xml/questions.xml
 
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   gestionarXml(this);
  }
 };
 xhttp.open("GET", "xml/questions.xml", true);
 xhttp.send();
}

//****************************************************************************************************
// Recuperamos los datos del fichero XML xml/preguntas.xml
// xmlDOC es el documento leido XML.
function gestionarXml(dadesXml){
 var xmlDoc = dadesXml.responseXML; //Parse XML to xmlDoc
 
 //TEXT1
 //Recuperamos el título y la respuesta correcta de Input, guardamos el texto secreto
 var pregunta001=xmlDoc.getElementsByTagName("title")[0].innerHTML;
 ponerDatosInputHtml1(pregunta001);
 textoSecreto1=xmlDoc.getElementsByTagName("answer")[0].childNodes[0].nodeValue;
 
 //TEXT2
 //Recuperamos el título y la respuesta correcta de Input, guardamos el texto secreto
 var pregunta002=xmlDoc.getElementsByTagName("title")[1].innerHTML;
 ponerDatosInputHtml2(pregunta002);
 textoSecreto2=xmlDoc.getElementsByTagName("answer")[1].childNodes[0].nodeValue;

 //SELECT1
 //Recuperamos el título y las opciones, guardamos la respuesta correcta
 var pregunta003=xmlDoc.getElementsByTagName("title")[2].innerHTML;
 var opcionesSelect1 = [];
 var nopt = xmlDoc.getElementById("profe003").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesSelect1[i] = xmlDoc.getElementById("profe003").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosSelectHtml1(pregunta003,opcionesSelect1);
 respuestaSelect1=parseInt(xmlDoc.getElementsByTagName("answer")[2].innerHTML);
 
 //SELECT1
 //Recuperamos el título y las opciones, guardamos la respuesta correcta
 var pregunta004=xmlDoc.getElementsByTagName("title")[3].innerHTML;
 var opcionesSelect2 = [];
 var nopt = xmlDoc.getElementById("profe004").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesSelect2[i] = xmlDoc.getElementById("profe004").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosSelectHtml2(pregunta004,opcionesSelect2);
 respuestaSelect2=parseInt(xmlDoc.getElementsByTagName("answer")[2].innerHTML);
}

//****************************************************************************************************
// poner los datos recibios en el HTML
function ponerDatosInputHtml1(t){
 document.getElementById("pregunta001").innerHTML = t;
}
function ponerDatosInputHtml2(t){
 document.getElementById("pregunta002").innerHTML = t;
}

function ponerDatosSelectHtml1(t,opt){
  document.getElementById("pregunta003").innerHTML=t;
  var select = document.getElementsByTagName("select")[0];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }
}

function ponerDatosSelectHtml2(t,opt){
  document.getElementById("pregunta004").innerHTML=t;
  var select = document.getElementsByTagName("select")[1];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }
}

function ponerDatosMultiSelectHtml1(t,opt){
  document.getElementById("pregunta005").innerHTML=t;   
  var multiSelect = document.getElementsByTagName("select")[2];
  
  //Bucle 
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    multiSelect.options.add(option);
 }  
}

function ponerDatosMultiSelectHtml1(t,opt){
  document.getElementById("pregunta006").innerHTML=t;   
  var multiSelect = document.getElementsByTagName("select")[3];
  
  //Bucle 
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    multiSelect.options.add(option);
 }  
}
