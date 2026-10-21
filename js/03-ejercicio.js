let stringsalida = " "
 do {
    const cadenatexto = prompt ("Ingrese una cadena de texto")
    if (cadenatexto !== null){
        if (!isNaN(cadenatexto)){
          alert("Ingrese solamente texto")
        } else {
          stringsalida = stringsalida + cadenatexto + "-"
        } 
      }
  } while (confirm("¿Deseas agregar otra palabra?"));
alert("las cadenas concatenadas son: " + stringsalida) 
