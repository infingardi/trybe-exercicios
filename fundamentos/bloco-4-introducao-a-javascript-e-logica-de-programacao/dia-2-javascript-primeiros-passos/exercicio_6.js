let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let nImpar = 0;

for(numero of numbers){
    if(numero % 2 == 1)
        nImpar++;
}

if(nImpar != 0){
    console.log(nImpar);
}
else{
    console.log("Nenhum valor impar encontrado");
}
