const numerofilas = parseInt(prompt ("Ingrese cantidad de filas de la tabla"))
const numerocolumnas = parseInt(prompt ("Ingrese cantidad de columnas de la tabla"))    
let numerofinal = 0
let filanumeros = " "
if (!isNaN(numerofilas) && (!isNaN(numerocolumnas)) && (numerofilas<= 10) && (numerofilas<= 10)){
  numerofinal = numerofilas * numerocolumnas
  for (let cantfilas = 1; cantfilas <= numerofilas; cantfilas++) {
      for (let i=1; i<= numerocolumnas; i++) {   
      filanumeros = filanumeros + numerofinal
      numerofinal--
      } 
      console.log(filanumeros);
      filanumeros = " "
    }
}
else {
      alert("Ingrese solamente números, en un rango entre 0 y 10")
    }  
  

      
    
    