

function lanzardado() {

    let aleatorio = 0;

    aleatorio = Math.floor(Math.random()*6) +1 ;
    
    console.log(aleatorio);
    
    if (aleatorio === 1) {
        document.getElementById("dado").style.backgroundImage = "url(./assets/dado1.png)" ;

    } else if (aleatorio === 2){

        document.getElementById("dado").style.backgroundImage = "url(./assets/dado2.png)" ;

    } else if (aleatorio === 3){

        document.getElementById("dado").style.backgroundImage = "url(./assets/dado3.png)" ;

    } else if (aleatorio === 4){

        document.getElementById("dado").style.backgroundImage = "url(./assets/dado4.png)" ;

    } else if (aleatorio === 5){

        document.getElementById("dado").style.backgroundImage = "url(./assets/dado5.png)" ;

    } else if (aleatorio === 6){

        document.getElementById("dado").style.backgroundImage = "url(./assets/dado6.png)" ;

    } 
}

