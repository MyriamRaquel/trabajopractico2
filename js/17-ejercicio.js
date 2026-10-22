const palabra = prompt("Ingrese la palabra")
let posicionvocal = 0
let vocal = " "
if (palabra !== null){
        if (!isNaN(palabra)){
          alert("Ingrese solamente texto")
        } else {
          for (let caracter = 0; caracter < palabra.length; caracter++){
            if ((palabra.charAt(caracter)=="a") || (palabra.charAt(caracter)=="e") || (palabra.charAt(caracter)=="i") || (palabra.charAt(caracter)=="o") || (palabra.charAt(caracter)=="u"))
                {
                posicionvocal=caracter
                vocal = palabra.charAt(caracter)
                caracter = palabra.length
                }
            }
          }
        alert("la vocal: " + "'" + vocal + "'" + " "+ "está en la posición: " + posicionvocal)
      }
         