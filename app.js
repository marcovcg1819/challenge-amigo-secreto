// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayAmigos = [];
let amigo = "";
let listaHtmlAmigos = document.getElementById('listaAmigos');
let htmlAmigoGanador = document.getElementById('resultado');
let numeroAmigoGanador = 0;
let amigoGanador = '';

function agregarAmigo(){
    amigo = document.getElementById('amigo').value;
    //console.log(typeof(amigo));
    if(amigo == '' || !isNaN(Number(amigo))){
        alert('nombre de amigo inválido');
    }else{
        arrayAmigos.push(amigo);
        //console.log(arrayAmigos);
        actualizarListaAmigo(amigo, listaHtmlAmigos);
    }
    document.getElementById('amigo').value = '';
    document.getElementById("amigo").focus();
}

function actualizarListaAmigo(amigo, element){
    const liElement = document.createElement('li');
    liElement.textContent = amigo;
    element.appendChild(liElement); 
}

function sortearAmigo(){
    numeroAmigoGanador = Math.floor(Math.random()*arrayAmigos.length);
   // console.log(numeroAmigoGanador);
    amigoGanador = arrayAmigos[numeroAmigoGanador];
    document.getElementById('resultado');
    actualizarListaAmigo(`Ganador: ${amigoGanador}`, htmlAmigoGanador);
}

function nuevoSorteo(){
    arrayAmigos = [];
    listaHtmlAmigos.innerHTML = "";
    htmlAmigoGanador.innerHTML = "";
    document.getElementById('sortearbtn').removeAttribute('disabled');
    document.getElementById("amigo").focus();
}

function hacerParejas(){
    let arrayAmigosCopia = arrayAmigos;

    while(arrayAmigos.length > 0){
        //sacanado la primera persona de la pareja
        let numeroAmigoGanador1 = Math.floor(Math.random()*arrayAmigos.length);
        amigoPareja1 = arrayAmigos[numeroAmigoGanador1];
        arrayAmigos.splice(numeroAmigoGanador1, 1); 
        
        //sacanado la segunda persona de la pareja
        let numeroAmigoGanador2 = 0;
        if(arrayAmigos.length !== 1){
            numeroAmigoGanador2 = Math.floor(Math.random()*arrayAmigos.length);  
        }        
        amigoPareja2 = arrayAmigos[numeroAmigoGanador2];
        arrayAmigos.splice(numeroAmigoGanador2, 1); 

        if(amigoPareja2 == undefined){
            amigoPareja2 = 'sin amigo';
        }
        let pareja = amigoPareja1+ " - "+amigoPareja2;

        document.getElementById('resultado');
        actualizarListaAmigo(`${pareja}`, htmlAmigoGanador);

        document.getElementById('sortearbtn').setAttribute('disabled','true');
    }
}



