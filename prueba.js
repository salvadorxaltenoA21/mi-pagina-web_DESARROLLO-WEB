// Leer la entrada desde process.stdin
let input = '';
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    // Eliminar espacios en blanco al inicio y final
    input = input.trim();

    // Convertir la entrada a un número
    const n = parseInt(input);

    // Validar que la entrada sea un número positivo
    if(n<=0){
        console.log("Entrada invalida. Debe ser un número positivo");
        return;
    }

    // Sumar los primeros n números naturales usando un bucle
    let suma=0;
    for(let i=0;i<n;i++){
        suma += i;
    }

    // Imprimir el resultado aquí
    console.log("La suma de los primeros "+ n + "números naturales es: "+suma);
    
});

productos.push({id:104,nombre:'Monitor',precio:249.99,stock:10});
console.log(productos);

productos=productos.filter(producto=>producto.id !== 102);
console.log();
console.log(productos);

//forEach(callback);    sirve para iterar 
//Map(callback);
//filter(callback);
//ReadableStreamDefaultController(callback);

//modificar un nuevo producto al arreglo 
//modificar el precio del articulo 101
productos=productos.map(producto=>{
    if(producto.id===101){
        return {...producto,precio:1035.76};
    }
    return producto;
})
console.log(productos);
//leer el arreglo 

productos.forEach((producto) => {
    console.log(`Nombre: ${producto.nombre}`);
    console.log(`Precio: ${producto.precio}`);
})

//ordenar objetos (ascendente) valores numericos 
console.log("ordenar (ascendente):");
productos.sort((a, b)=> a.precio - b.precio);
productos.log(productos);

//ordenar objetos (desendente)
console.log("ordenar (descendente):");
productos.sort((a, b)=> b.precio - a.precio);
productos.log(productos);

//ordenar nombres alfabeticamente 
console.log("ordenar por nombre (asrndentemente)");
productos.sort((a, b)=> a.nombre.localeCompare(b.nombre));
console.log(productos);
//ordenar nombres alfabeticamente 
console.log("ordenar por nombre (desendentemente)");
productos.sort((a, b)=> a.nombre.localeCompare(b.nombre));
console.log(productos);
