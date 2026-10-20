let stringsalida = " "
 do {
    const cadenatexto = prompt ("Ingrese una cadena de texto")
    if (isNaN(cadenatexto)){
      stringsalida = stringsalida + cadenatexto + "-"
    }
    else {
      alert("Ingrese solamente texto")
    }
  } while (confirm() === true);
alert("las cadenas concatenadas son: " + stringsalida) 



/* let stringsalida = " "
const primercadenatexto = prompt ("Ingrese una cadena de texto")
stringsalida = stringsalida + primercadenatexto + "-"
while (confirm() === true) {
  const cadenatexto = prompt ("Ingrese una cadena de texto")
    if (isNaN(cadenatexto)){
      stringsalida = stringsalida + cadenatexto + "-"
    }
    else {
      alert("Ingrese solamente texto")
    }
} 
alert("las cadenas concatenadas son: " + stringsalida)
 */
