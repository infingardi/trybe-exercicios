let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];

for(numero of numbers){
    if(numero < menor)
        menor = numero;
}

console.log(menor);