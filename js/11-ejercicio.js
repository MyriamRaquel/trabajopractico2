const nombre1 = prompt("Ingrese el nombre de la primera persona")
const edad1 = parseInt(prompt("Ingrese la edad de la primera persona"))
const nombre2 = prompt("Ingrese el nombre de la segunda persona")
const edad2 = parseInt(prompt("Ingrese la edad de la segunda persona"))
const nombre3 = prompt("Ingrese el nombre de la tercera persona")
const edad3 = parseInt(prompt("Ingrese la la edad de la tercera persona"))
let edadmayor = 0
if (!isNaN(edad1) && (!isNaN(edad2)) && (!isNaN(edad3))) {
  edadmayor=Math.max(edad1, edad2, edad3)
  if (edadmayor==edad1)  {
    alert("La persona mayor es: " + nombre1)
  }
  if (edadmayor==edad2)  {
    alert("La persona mayor es: " + nombre2)
  }
  if (edadmayor==edad3)  {
    alert("La persona mayor es: " + nombre3)
  }
}
else {
  alert ("por favor ingrese solo números para la edad. Las edades deben ser diferentes para poder compararlas")
}