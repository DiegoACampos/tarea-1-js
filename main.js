// ejercicio numero 1

// function piramide(num){
//     let a=[];
//     for (let i = 1; i <=num; i++) {
//     a+=i;
//     console.log(a)
// }
// };
// piramide(6);

//                                ejercico 2 ejemplo 1

// let Array1 = ['rojo', 'azul', 'amarillo'];
// let Array2 = ['blanco', 'negro', 'rojo'];
// let match = [];

// function compare(array1,array2){        
//     for(let i = 0; i < Array1.length; i++){ 
//         for(let j = 0; j < Array2.length; j++){
//            if (Array2[j]===Array1[i]) {
//             match.push( Array2[j]);
//            }
//         }
//     }
//     console.log(match)
// };
// compare();
//                                  ejercicio 2 ejemplo 2

// let Array1 = [4, 3, true, 'manzana'];
// let Array2 = ['pera', 3, false, true, 3, true];
// let match = [];

// function compare(array1,array2){        
//     for(let i = 0; i < Array1.length; i++){ 
//         for(let j = 0; j < Array2.length; j++){
//            if (Array2[j]===Array1[i]) {
//             match.push( Array2[j]);
//            }
//         }
//     }
//     console.log(match)
// };
// compare();

//                                 ejercicio 3

class Carrito{
    constructor(){
        this.montoTotal = 0;
        this.productos = [];
    }
    agregarProductos(nombre, precio, unidades){
        const producto = {
            nombre: nombre,
            precio: precio,
            unidades: unidades,
        }
        this.productos.push(producto);
        this.montoTotal += precio * unidades;
    }
}
const carrito = new Carrito();
carrito.agregarProductos("leche",10,1);
carrito.agregarProductos("azucar",5,2);
console.log(carrito);
    


