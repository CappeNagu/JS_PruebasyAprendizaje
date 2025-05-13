const IVA = 1.21;
let totalCarrito = 0;

const resultadoConIva = (precio) => precio * IVA;

let condition = true;
do {
  let eleccion = prompt(`Bienvenido/a a nuestra tienda, selecciona un producto:
        1-Pizza
        2-Hamburguesa
        3-Lomos
        4-Ver total
        ESC-Salir de la tienda
        `);

  switch (eleccion) {
    case "1":
      totalCarrito += resultadoConIva(15000);
      break;
    case "2":
      totalCarrito += resultadoConIva(10000);
      break;
    case "3":
      totalCarrito += resultadoConIva(12000);
      break;
    case "4":
      alert("El total de su compra es: " + totalCarrito);
      break;
    case "ESC":
      alert("Gracias por su compra");
      condition = false;
      break;
    default:
      alert("No tenemos ese producto");
      break;
  }
} while (condition);

