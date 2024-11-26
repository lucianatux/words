 // Deshabilitar todos los campos
 for(fila=1; fila<=6; fila++){
    for(columna=1;columna<=6;columna++){
      document.getElementById("fila"+fila+"C"+columna).readOnly=true;
    }
  }


  var palabra1_letra1 = document.getElementById("fila1C1");
  var palabra1_letra2 = document.getElementById("fila1C2");
  var palabra1_letra3 = document.getElementById("fila1C3");
  var palabra1_letra4 = document.getElementById("fila1C4");
  var palabra1_letra5 = document.getElementById("fila1C5");

  var palabra2_letra1 = document.getElementById("fila4C2");
  var palabra2_letra2 = document.getElementById("fila4C3");
  var palabra2_letra3 = document.getElementById("fila4C4");

  var palabra3_letra1 = document.getElementById("fila1C4");
  var palabra3_letra2 = document.getElementById("fila2C4");
  var palabra3_letra3 = document.getElementById("fila3C4");
  var palabra3_letra4 = document.getElementById("fila4C4");

  var palabra4_letra1 = document.getElementById("fila3C2");
  var palabra4_letra2 = document.getElementById("fila4C2");
  var palabra4_letra3 = document.getElementById("fila5C2");
  var palabra4_letra4 = document.getElementById("fila6C2");

  //Habilitar las casillas necesarias (horizontales)
  palabra1_letra1.readOnly =false;
  palabra1_letra2.readOnly =false;
  palabra1_letra3.readOnly =false;
  palabra1_letra4.readOnly =false;
  palabra1_letra5.readOnly =false;

  palabra2_letra1.readOnly =false;
  palabra2_letra2.readOnly =false;
  palabra2_letra3.readOnly =false;

  //Habilitar las casillas necesarias (verticales)
  palabra3_letra1.readOnly =false;
  palabra3_letra2.readOnly =false;
  palabra3_letra3.readOnly =false;
  palabra3_letra4.readOnly =false;

  palabra4_letra1.readOnly =false;
  palabra4_letra2.readOnly =false;
  palabra4_letra3.readOnly =false;
  palabra4_letra4.readOnly =false;

  for(fila=1; fila<=6; fila++){
    for(columna=1;columna<=6;columna++){
      if(document.getElementById("fila"+ fila +"C" + columna).readOnly==false){
         document.getElementById("fila"+ fila +"C" + columna).style.backgroundColor="#07c7e6";
      }
    }
  }

  var errorActivo=0;
  function error(){
    document.getElementById("mensaje").innerHTML="Existen palabras incorrectas o incompletas";
    document.getElementById("mensaje").className="alert alert-danger";
    errorActivo=1;
  }

  //esta funcion es para ejecutarse cada 5 segundos
  setInterval('ocultarError()',8000);

  function ocultarError(){
    if(errorActivo==1){
      document.getElementById("mensaje").innerHTML="";
      document.getElementById("mensaje").className="";
      errorActivo=0;
    }
  }

  function verificar(){
    document.getElementById("mensaje").innerHTML="";
    palabra1 = palabra1_letra1.value + palabra1_letra2.value + palabra1_letra3.value + palabra1_letra4.value + palabra1_letra5.value; 
    palabra2 = palabra2_letra1.value + palabra2_letra2.value + palabra2_letra3.value; 
    palabra3 = palabra3_letra1.value + palabra3_letra2.value + palabra3_letra3.value + palabra3_letra4.value; 
    palabra4 = palabra4_letra1.value + palabra4_letra2.value + palabra4_letra3.value + palabra4_letra4.value;

    if(palabra1.toLowerCase()=="fuego" && palabra2.toLowerCase()=="oso" && palabra3.toLowerCase()=="gato" && palabra4.toLowerCase()=="loro"){
      document.getElementById("mensaje").innerHTML="GANASTE!!!";
      document.getElementById("mensaje").style.fontSize="24px";
      document.getElementById("mensaje").className="alert alert-success";
    }else{
      if(palabra1.toLowerCase()!="fuego"){
         palabra1_letra1.value="";
         palabra1_letra2.value="";
         palabra1_letra3.value="";
         palabra1_letra4.value="";
         palabra1_letra5.value="";
         error();
      }

      if(palabra2.toLowerCase()!="oso"){
         palabra2_letra1.value="";
         palabra2_letra2.value="";
         palabra2_letra3.value="";
         error();
      }

      if(palabra3.toLowerCase()!="gato"){
         palabra3_letra1.value="";
         palabra3_letra2.value="";
         palabra3_letra3.value="";
         error();
      }

      if(palabra4.toLowerCase()!="loro"){
         palabra4_letra1.value="";
         palabra4_letra2.value="";
         palabra4_letra3.value="";
         palabra4_letra4.value="";
         error();
      }

      //corrector de palabras
      if(palabra1.toLowerCase()=="fuego"){
         palabra1_letra4.value="g";
      }

      if(palabra2.toLowerCase()=="oso"){
         palabra2_letra1.value="o";
      }

      if(palabra3.toLowerCase()=="gato"){
         palabra3_letra1.value="g";
         palabra3_letra4.value="o";
      }

      if(palabra2.toLowerCase()=="loro"){
         palabra4_letra2.value="o";
      }

    }
  }