const texto = prompt("Ingrese un texto")
let tamanotexto = 0
let stringsalida = " "
if (texto !== null){
        if (!isNaN(texto)){
          alert("Ingrese solamente texto")
        } else {
            tamanotexto = texto.length
            for (let i=tamanotexto; i>=0; i--) {
              console.log(i)
              stringsalida=stringsalida + texto.charAt(i)
              console.log(stringsalida)
            }
          alert (stringsalida)
        } 
      }