const texto = prompt("Ingrese una palabra")
let tamanotexto = 0
let stringsalida = " "
if (texto !== null){
        if (!isNaN(texto)){
          alert("Ingrese solamente texto")
        } else {
          tamanotexto = texto.length
          for (let i= 0; i<tamanotexto; i++) {
            stringsalida=stringsalida + texto.charAt(i) + "-"
          }
          alert (stringsalida)
        } 
      }
