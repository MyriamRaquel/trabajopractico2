const palabra = prompt("Ingrese una palabra")
if (palabra !== null){
        if (!isNaN(palabra)){
          alert("Ingrese solamente texto")
        } else {
          let textoEnMayusculas = palabra.toUpperCase();
          alert ("El texto en mayúsculas es: " + textoEnMayusculas)
        } 
      }