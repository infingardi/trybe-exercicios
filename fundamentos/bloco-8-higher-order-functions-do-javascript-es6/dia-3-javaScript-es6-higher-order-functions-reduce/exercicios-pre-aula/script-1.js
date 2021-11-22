/*
// exercicio 1: maior numero
const numbers = [32, 15, 3, 2, -5, 56, 10];

const maiorNumero = numbers.reduce((result, number) => number > result ? number : result);

console.log(maiorNumero);

// exercicio 2: soma dos numeros pares; reduce e filter
const number2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const numerosPares = number2.filter(number => number % 2 === 0);

const somaNumeroPar = numerosPares.reduce((result, number) => result + number);

console.log(somaNumeroPar);

// exercicio 3: soma dos numeros pares; reduce
const number3 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const somaNumeroPar3 = number3.reduce((result, number) => number % 2 == 0 ? result + number : result);

console.log(somaNumeroPar3);
*/
// exercicio 3: confere maior nota; map e reduce
const estudantes = [
    {
        nome: 'Jorge',
        sobrenome: 'Silva',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 67 },
            { name: 'Português', nota: 79 },
            { name: 'Química', nota: 70 },
            { name: 'Biologia', nota: 65 },
        ],
    },
    {
        nome: 'Mario',
        sobrenome: 'Ferreira',
        idade: 15,
        turno: 'Tarde',
        materias: [
            { name: 'Matemática', nota: 59 },
            { name: 'Português', nota: 80 },
            { name: 'Química', nota: 78 },
            { name: 'Biologia', nota: 92 },
        ],
    },
    {
        nome: 'Jorge',
        sobrenome: 'Santos',
        idade: 15,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 76 },
            { name: 'Português', nota: 90 },
            { name: 'Química', nota: 70 },
            { name: 'Biologia', nota: 80 },
        ],
    },
    {
        nome: 'Maria',
        sobrenome: 'Silveira',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 91 },
            { name: 'Português', nota: 85 },
            { name: 'Química', nota: 92 },
            { name: 'Biologia', nota: 90 },
        ],
    },
    {
        nome: 'Natalia',
        sobrenome: 'Castro',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 70 },
            { name: 'Português', nota: 70 },
            { name: 'Química', nota: 60 },
            { name: 'Biologia', nota: 50 },
        ],
    },
    {
        nome: 'Wilson',
        sobrenome: 'Martins',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 80 },
            { name: 'Português', nota: 82 },
            { name: 'Química', nota: 79 },
            { name: 'Biologia', nota: 75 },
        ],
    },
];


let estudanteMaiorNota = estudantes.map((estudante)=> {
    const maiorNota = estudante.materias.reduce((bigger, number) =>  number.nota > bigger.nota ? number : bigger);
    return {name: estudante.nome, materia: maiorNota.name};
});

console.log(estudanteMaiorNota);

