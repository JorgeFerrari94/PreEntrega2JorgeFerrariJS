const productos = [
    { id: 1, nombre: "remera", precio: 1000 },
    { id: 2, nombre: "pantalon", precio: 2000 },    
    { id: 3, nombre: "campera", precio: 3000 },
    { id: 4, nombre: "zapatillas", precio: 4000 },
  ];

let nombre = prompt("Bienvenindo que desea comprar?"); 
const encontrado = productos.find(item => item.nombre.includes(nombre)); 
 if(encontrado){
   let mensaje = `
     Id: ${encontrado.id}
     Nombre: ${encontrado.nombre}
     Precio: ${encontrado.precio}
   `;
   
   alert(mensaje);
 }else{
   alert("Producto no encontrado");
 }
