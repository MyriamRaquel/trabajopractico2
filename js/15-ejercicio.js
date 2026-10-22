const palabra = prompt("Ingrese la palabra")
let cuentavocales = 0
if (palabra !== null){
        if (!isNaN(palabra)){
          alert("Ingrese solamente texto")
        } else {
          for (let caracter = 0; caracter < palabra.length; caracter++){
          if ((palabra.charAt(caracter)=="a") || (palabra.charAt(caracter)=="e") || (palabra.charAt(caracter)=="i") || (palabra.charAt(caracter)=="o") || (palabra.charAt(caracter)=="u"))
              {
               cuentavocales++
               }
          }
          alert("la cantidad de vocales de la palabra ingresada es: " + cuentavocales)
          } 
        }
