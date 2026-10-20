const edad = parseInt(prompt ("Ingrese la edad de la persona"))
if (!isNaN(edad)) {
  if (edad>18){
    alert("La persona ya puede conducir")
  }
  else {
    alert("La persona es menor de edad por lo tanto no puede conducir")
  }
}
else {
  alert ("No es un número válido")
}