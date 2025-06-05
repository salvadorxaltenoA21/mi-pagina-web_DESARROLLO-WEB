console.log("inicio del programa");
function tareaSincrona(){
    console.log("ejecutar tarea asincrona");
    for(let i=0;i<10000000;i++){ } //bucle vacio
    console.log("tarea sincrina completada");
}
tareaSincrona();
console.log("fin del programa");

//callback es una funcion, parametro 

console.log("inicio del programa");
function tareaSincrona(){
    console.log("ejecutar tarea asincrona");
    setTimeout(()=>{
        console.log("tarea 3");
        cancelIdleCallback();
    }, 2000); //2 segundos de espera
}

tareaSincrona();
console.log("fin del programa");


//uso de callback 
obtenerDatosUsuario(5,(error,usuario)=>{
    if(error){
        console.log('Error:',error);
    }else{
        console.log('Usuario:',usuario);
    }
});