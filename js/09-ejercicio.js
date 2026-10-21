let restomultiplo4 = 0
let restomultiplo9 = 0
let restomultiplo5 = 0
for (let numero = 1; numero <= 500; numero++) {
    
    restomultiplo4 = numero % 4
    restomultiplo9 = numero % 9
    restomultiplo5 = numero % 5
    if (restomultiplo4 == 0) {
      console.log(numero + " (Múltiplo de 4)");
    }
    else {
      if (restomultiplo9 == 0) {
        console.log(numero + " (Múltiplo de 9)");
      }
      else {
          console.log(numero)
      }
    }
    if (restomultiplo5 == 0) {
      console.log(String("-").repeat(20));
    }
} 
