let sumanumeros = 0
 do {
    const numero = parseInt(prompt ("Ingrese un número"))
    if (!isNaN(numero)){
      sumanumeros = sumanumeros + numero
    }
    else {
      alert("Ingrese solamente numeros")
    }
  } while (confirm() === true);
alert("la suma de todos los números ingresados es: " + sumanumeros) 