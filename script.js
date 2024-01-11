
/*
    Hola, realice un "piedra, papel, tijera".
    Deje comentarios en varias lineas para tener una idea, tanto para mi como para el que lea
 
    */


const opcionJuego = ['Piedra' , 'Papel' , 'Tijera']  // Array de opciones del juego

function nameConfirm() { // Esta funcion es para confirmar que no quede vacia 
    
    let userName;

    do {
        userName = prompt("Ingrese su nombre");
    } while ((userName === '') || (userName.trim() === ''))   // El .trim() es para eliminar los espacios en ambos extremos
    userName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase(); // Hago que siempre quede con la inicial en mayuscula y el resto en minuscula, sin importar como lo ingrese el usuario
    return userName;
}


function eleccionUser() { // Funcion para que el usuario ingrese unicamente alguna de los elementos del array "opcionJuego"

    let itemUser;

    do {
        itemUser = prompt('Ingrese una de las opciones:\n'+ opcionJuego.join(' ')); // Uso join para que lo imprima con espacios entre elementos
        itemUser = itemUser.charAt(0).toUpperCase() + itemUser.slice(1).toLowerCase();// Lo mismo que antes, la inicial en mayus y el resto en minuscula para que coincida con los elementos del array "opcionJuego"
    } while (!opcionJuego.includes(itemUser)); 

    return itemUser;
}

function eleccionPc(){ // eleccion random para la pc 
    let itemPc = opcionJuego[Math.floor(Math.random() * opcionJuego.length)] // Uso  el metodo math sobre el array para elegir un elemento al azar
    return itemPc
}


function jugar() {
    const nombreUser = nameConfirm() // Llamo a la funcion para que me de el nombre del usuario
    let aceptar = confirm(`${nombreUser} ¿Queres jugar?`) // Lo declaro aca para que si el usuario no acepta, no entre al while 

    // Declaro e inicializo las variables para los puntos 
    let userPuntos = 0
    let pcPuntos = 0
    
    while (aceptar ===  true) {

        let userSelect =  eleccionUser(); // Llamo a la funcion para que el usuario eliga en cada vuelta que de el while
        let pcSelect =  eleccionPc(); // Lo mismo pero random del array "opcionJuego"

        if(userSelect === pcSelect){  // Si ambas elecciones son iguales es empate
            
            alert(`Fue empate 😅\n\n${nombreUser}: ${userSelect}\nPc: ${pcSelect}\n\nPuntuacion:\n ${nombreUser}: ${userPuntos} / Pc: ${pcPuntos}`);

        } else if((userSelect === 'Piedra' && pcSelect === 'Tijera') || (userSelect === 'Papel' && pcSelect === 'Piedra') || (userSelect === 'Tijera' && pcSelect === 'Papel')){ // En este else if, la seleccion del usuario gana a la random del pc
            
            userPuntos++ // Sumo los puntos antes sino en el alert no estaria actualizado
            alert(`GANASTE!! 🎉\n\n${nombreUser}: ${userSelect}\nPc: ${pcSelect}\n\nPuntuacion:\n ${nombreUser}: ${userPuntos} /  Pc: ${pcPuntos}`);
        } else {

            pcPuntos++
            alert(`PERDISTE 😞\n\n${nombreUser}: ${userSelect}\nPc: ${pcSelect}\n\nPuntuacion:\n ${nombreUser}: ${userPuntos} / Pc: ${pcPuntos}`);
        }
        
        
        // Vuelvo a preguntar para ver si tiene que entrar de nuevo al while o no
        aceptar = confirm(`${nombreUser} ¿Queres seguir jugando?`)
    } 

    return alert(`Hasta la proxima ${nombreUser}👋`);

}



// Llamo a la funcion
jugar() 


