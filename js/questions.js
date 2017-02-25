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

function gestionarXml(dadesXml){
 var xmlDoc = dadesXml.responseXML; 
 

 //Recuperamos el título y las opciones de cada question del XML y guardamos las respuestas correctas
 //Pregunta 3 - SELECT 1
 var pregunta003=xmlDoc.getElementsByTagName("title")[2].innerHTML;
 var opcionesSelect1 = [];
 var nopt = xmlDoc.getElementById("profe003").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesSelect1[i] = xmlDoc.getElementById("profe003").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosSelectHtml(pregunta003,opcionesSelect1);
 respuestaSelect1=parseInt(xmlDoc.getElementsByTagName("answer")[2].innerHTML);
 
 //Pregunta 4 - SELECT 2
 var pregunta004=xmlDoc.getElementsByTagName("title")[3].innerHTML;
 var opcionesSelect2 = [];
 var nopt = xmlDoc.getElementById("profe004").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesSelect2[i] = xmlDoc.getElementById("profe004").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosSelectHtml1(pregunta004,opcionesSelect2);
 respuestaSelect2=parseInt(xmlDoc.getElementsByTagName("answer")[2].innerHTML);
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
  var select = document.getElementsByTagName("select")[0];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }
}
