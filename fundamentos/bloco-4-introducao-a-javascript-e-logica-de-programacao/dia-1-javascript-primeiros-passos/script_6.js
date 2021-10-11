let a = "cavalo";

a = a.toLocaleLowerCase();

if(a == "peao")
    console.log("Move-se uma casa para frente");
else if(a == "cavalo")
    console.log("Anda em L");
else if(a == "bispo")
    console.log("Move-se na diagonal");
else if (a == "torre")
    console.log("Move-se em linha reta, tanto na vertical quanto na horizontal");
else if (a == "dama")
    console.log("pode mover-se em qualquer direção");
else if (a == "rei")
    console.log("pode mover-se em qualquer direção, porem só uma casa");
else
    console.log("Peça não existente");
