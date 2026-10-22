const numeroingresado = parseInt(prompt ("Ingrese cantidad de filas de la pirámide"))
    if (!isNaN(numeroingresado) && (numeroingresado>= 0) && (numeroingresado<= 50)){
      for (let numero = numeroingresado; numero >= 1; numero--) {
          console.log(String(numero).repeat(numero));
      } 
    }
    else {
      alert("Ingrese solamente números, en un rango entre 0 y 50")
    }