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
 
 //SELECT
 //Recuperamos el título y las opciones, guardamos la respuesta correcta
 var pregunta003=xmlDoc.getElementsByTagName("title")[1].innerHTML;
 var opcionesSelect = [];
 var nopt = xmlDoc.getElementById("profe003").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesSelect[i] = xmlDoc.getElementById("profe003").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosSelectHtml(pregunta003,opcionesSelect);
 respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[1].innerHTML);
}

function ponerDatosSelectHtml(t,opt){
  document.getElementById("pregunta003").innerHTML=t;
  var select = document.getElementsByTagName("select")[0];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }  
}
