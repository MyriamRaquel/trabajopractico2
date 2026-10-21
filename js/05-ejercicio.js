let resto = 0
let letrasalida = ""
 do {
    const numero = parseInt(prompt ("Ingrese un número de DNI"))
    if (!isNaN(numero) && (numero>= 0) && (numero<= 99999999)){
      resto = parseInt(numero % 23)
       switch (resto) {
        case 0:
          letrasalida = "T"
          break;
        case 1:
          letrasalida = "R"
          break;
        case 2:
          letrasalida = "W"
          break;
        case 3:
          letrasalida = "A"
          break;
        case 4:
          letrasalida = "G"
          break; 
        case 5:
          letrasalida = "M"
          break; 
        case 6:
          letrasalida = "Y"
          break; 
        case 7:
          letrasalida = "F"
          break; 
        case 8:
          letrasalida = "P"
          break;           
        case 9:
          letrasalida = "D"
          break; 
        case 10:
          letrasalida = "X"
          break; 
        case 11:
          letrasalida = "B"
          break;
        case 12:
          letrasalida = "N"
          break;  
        case 13:
          letrasalida = "J"
          break; 
        case 14:
          letrasalida = "Z"
          break;  
        case 15:
          letrasalida = "S"
          break; 
        case 16:
          letrasalida = "Q"
          break; 
        case 17:
          letrasalida = "V"
          break; 
        case 18:
          letrasalida = "H"
          break;  
        case 19:
          letrasalida = "L"
          break;  
        case 20:
          letrasalida = "C"
          break; 
        case 21:
          letrasalida = "K"
          break; 
        case 22:
          letrasalida = "E"
          break;        
        default:
          alert("No existe letra asignada para el número ingresado")    
      }
    alert("la letra asignada al número ingresado es: " + letrasalida) 
    }
    else {
      alert("Ingrese solamente números, en un rango entre 0 y 99999999")
    }
  } while (confirm("¿Deseas agregar otro número?"));