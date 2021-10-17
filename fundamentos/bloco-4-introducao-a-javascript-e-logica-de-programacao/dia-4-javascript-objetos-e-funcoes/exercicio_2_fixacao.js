//1 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge'
};

for (const key in names) {
    console.log('Olá ' + names[key]);
}

//2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (const key in car) {
    console.log(key, car[key]);
}