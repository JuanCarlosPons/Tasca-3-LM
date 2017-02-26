var formElement=null;
var textoSecreto1=null;
var textoSecreto2=null;
var respuestaSelect1=null;
var respuestaSelect2=null;
var respuestaMultiSelect1=null
var respuestaMultiSelect2=null
var respuestasCheckbox1 = []
var respuestasCheckbox2 = []
var respuestasRadio1 = []
var respuestasRadio2 = []
var nota = 0;  //nota de la prueba sobre 10 puntos (hay 10 preguntas)

//**************************************************************************************************** 
//Después de cargar la página (onload) se definen los eventos sobre los elementos, entre otras acciones.

window.onload = function(){ 
 
//CORREGIR al apretar el botón
 formElement=document.getElementById('myform');
 formElement.onsubmit=function(){
   inicializar();
	corregirTexto1();
	corregirTexto2();
    	corregirSelect1();
	corregirSelect2();
	corregirMultiSelect1();
	corregirMultiSelect2();
    	corregirCheckbox1();
	corregirCheckbox2();
	corregirRadio1();
	corregirRadio2();
    	presentarNota();
   return false;
  }
 
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
 var pregunta002=xmlDoc.getElementsByTagName("title")[1].innerHTML;
 ponerDatosInputHtml2(pregunta002);
 textoSecreto2=xmlDoc.getElementsByTagName("answer")[1].childNodes[0].nodeValue;

 //SELECT1
 var pregunta003=xmlDoc.getElementsByTagName("title")[2].innerHTML;
 var opcionesSelect1 = [];
 var nopt = xmlDoc.getElementById("profe003").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesSelect1[i] = xmlDoc.getElementById("profe003").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosSelectHtml1(pregunta003,opcionesSelect1);
 respuestaSelect1=parseInt(xmlDoc.getElementsByTagName("answer")[2].innerHTML);
 
 //SELECT2
 var pregunta004=xmlDoc.getElementsByTagName("title")[3].innerHTML;
 var opcionesSelect2 = [];
 var nopt = xmlDoc.getElementById("profe004").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesSelect2[i] = xmlDoc.getElementById("profe004").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosSelectHtml2(pregunta004,opcionesSelect2);
 respuestaSelect2=parseInt(xmlDoc.getElementsByTagName("answer")[2].innerHTML);

 //MULTISELECT1
 var pregunta005=xmlDoc.getElementsByTagName("title")[4].innerHTML;
 var opcionesMultiSelect1 = [];
 var nopt = xmlDoc.getElementById("profe005").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesMultiSelect1[i] = xmlDoc.getElementById("profe005").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosMultiSelectHtml1(pregunta005,opcionesMultiSelect1);
 respuestaMultiSelect1=parseInt(xmlDoc.getElementsByTagName("answer")[2].innerHTML);

 //MULTISELECT2
 var pregunta006=xmlDoc.getElementsByTagName("title")[5].innerHTML;
 var opcionesMultiSelect2 = [];
 var nopt = xmlDoc.getElementById("profe006").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesMultiSelect2[i] = xmlDoc.getElementById("profe006").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosMultiSelectHtml2(pregunta006,opcionesMultiSelect2);
 respuestaMultiSelect2=parseInt(xmlDoc.getElementsByTagName("answer")[2].innerHTML);
 
 //CHECKBOX1
 var pregunta007 = xmlDoc.getElementsByTagName("title")[6].innerHTML;
 var opcionesCheckbox1 = [];
 var nopt = xmlDoc.getElementById("profe007").getElementsByTagName('option').length;
 for (i = 0; i < nopt; i++) { 
    opcionesCheckbox1[i]=xmlDoc.getElementById("profe007").getElementsByTagName('option')[i].innerHTML;
 }  
 ponerDatosCheckboxHtml1(pregunta007,opcionesCheckbox1);
 var nres = xmlDoc.getElementById("profe007").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasCheckbox1[i]=xmlDoc.getElementById("profe007").getElementsByTagName("answer")[i].innerHTML;
 }
 
 //CHECKBOX2
 var pregunta008 = xmlDoc.getElementsByTagName("title")[7].innerHTML;
 var opcionesCheckbox2 = [];
 var nopt = xmlDoc.getElementById("profe008").getElementsByTagName('option').length;
 for (i = 0; i < nopt; i++) { 
    opcionesCheckbox2[i]=xmlDoc.getElementById("profe008").getElementsByTagName('option')[i].innerHTML;
 }  
 ponerDatosCheckboxHtml2(pregunta008,opcionesCheckbox2);
 var nres = xmlDoc.getElementById("profe008").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasCheckbox2[i]=xmlDoc.getElementById("profe008").getElementsByTagName("answer")[i].innerHTML;
 }
 
 //RADIO1
 var pregunta009 = xmlDoc.getElementsByTagName("title")[8].innerHTML;
 var opcionesRadio1 = [];
 var nopt = xmlDoc.getElementById("profe009").getElementsByTagName('option').length;
 for (i = 0; i < nopt; i++) { 
    opcionesRadio1[i]=xmlDoc.getElementById("profe009").getElementsByTagName('option')[i].innerHTML;
 }  
 ponerDatosRadioHtml1(pregunta009,opcionesRadio1);
 var nres = xmlDoc.getElementById("profe009").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasRadio1[i]=xmlDoc.getElementById("profe009").getElementsByTagName("answer")[i].innerHTML;
 } 

  //RADIO2
 var pregunta010 = xmlDoc.getElementsByTagName("title")[9].innerHTML;
 var opcionesRadio2 = [];
 var nopt = xmlDoc.getElementById("profe010").getElementsByTagName('option').length;
 for (i = 0; i < nopt; i++) { 
    opcionesRadio2[i]=xmlDoc.getElementById("profe010").getElementsByTagName('option')[i].innerHTML;
 }  
 ponerDatosRadioHtml2(pregunta010,opcionesRadio2);
 var nres = xmlDoc.getElementById("profe010").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasRadio2[i]=xmlDoc.getElementById("profe010").getElementsByTagName("answer")[i].innerHTML;
 }
}

//****************************************************************************************************
//implementación de la corrección
function corregirTexto1(){
  var s=formElement.elements[0].value;     
  if (s==textoSecreto1) {
   darRespuestaHtml("Pregunta 1: Correcta");
   nota +=1;
  }
    else darRespuestaHtml("Pregunta 1: Incorrecta");
}

function corregirTexto2(){
  var s=formElement.elements[1].value;     
  if (s==textoSecreto2) {
   darRespuestaHtml("Pregunta 2: Correcta");
   nota +=1;
  }
    else darRespuestaHtml("Pregunta2: Incorrecta");
}

function corregirSelect1(){
  //Compara el índice seleccionado con el valor del íncide que hay en el xml (<answer>2</answer>)
  //para implementarlo con type radio, usar value para enumerar las opciones <input type='radio' value='1'>...
  //luego comparar ese value con el value guardado en answer
  var sel = formElement.elements[2];  
  if (sel.selectedIndex-1==respuestaSelect1) { //-1 porque hemos puesto una opción por defecto en el select que ocupa la posición 0
   darRespuestaHtml("Pregunta 3: Correcta");
   nota +=1;
  }
  else darRespuestaHtml("Pregunta 3: Incorrecta");
}

function corregirSelect2(){
  //Compara el índice seleccionado con el valor del íncide que hay en el xml (<answer>2</answer>)
  //para implementarlo con type radio, usar value para enumerar las opciones <input type='radio' value='1'>...
  //luego comparar ese value con el value guardado en answer
  var sel = formElement.elements[3];  
  if (sel.selectedIndex-1==respuestaSelect2) { //-1 porque hemos puesto una opción por defecto en el select que ocupa la posición 0
   darRespuestaHtml("Pregunta 4: Correcta");
   nota +=1;
  }
  else darRespuestaHtml("Pregunta 4: Incorrecta");
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
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    multiSelect.options.add(option);
 }  
}

function ponerDatosMultiSelectHtml2(t,opt){
  document.getElementById("pregunta006").innerHTML=t;   
  var multiSelect = document.getElementsByTagName("select")[3];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    multiSelect.options.add(option);
 }  
}

function ponerDatosCheckboxHtml1(t,opt){
 var checkboxContainer=document.getElementById('checkboxDiv1');
 document.getElementById('pregunta007').innerHTML = t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="checkbox";
    input.name="color";
    input.id="color_"+i;;    
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
    checkboxContainer.appendChild(document.createElement("br"));
 }  
}

function ponerDatosCheckboxHtml2(t,opt){
 var checkboxContainer=document.getElementById('checkboxDiv2');
 document.getElementById('pregunta008').innerHTML = t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="checkbox";
    input.name="color";
    input.id="color_"+i;;    
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
    checkboxContainer.appendChild(document.createElement("br"));
 }
}
 
function ponerDatosRadioHtml1(t,opt){
 var radioContainer=document.getElementById('radioDiv1');
 document.getElementById('pregunta009').innerHTML = t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="radio";
    input.name="color";
    input.id="color_"+i;;    
    radioContainer.appendChild(input);
    radioContainer.appendChild(label);
    radioContainer.appendChild(document.createElement("br"));
 }
}
 
 function ponerDatosRadioHtml2(t,opt){
 var radioContainer=document.getElementById('radioDiv2');
 document.getElementById('pregunta010').innerHTML = t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="radio";
    input.name="color";
    input.id="color_"+i;;    
    radioContainer.appendChild(input);
    radioContainer.appendChild(label);
    radioContainer.appendChild(document.createElement("br"));
 }
}

//****************************************************************************************************
//Gestionar la presentación de las respuestas
function darRespuestaHtml(r){
 var p = document.createElement("p");
 var node = document.createTextNode(r);
 p.appendChild(node);
 document.getElementById('resultadosDiv').appendChild(p);
}

function presentarNota(){
   darRespuestaHtml("Nota: "+nota+" puntos sobre 10");
}

function inicializar(){
   document.getElementById('resultadosDiv').innerHTML = "";
   nota=0.0;
}

//Comprobar que se han introducido datos en el formulario
