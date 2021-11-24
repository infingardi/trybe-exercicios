// exercicio 1
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

const [saudacao, realizaSaudacao] = saudacoes;
realizaSaudacao(saudacao);

// exercicio 2
const array = ['gato', 'água', 'comida'];
const [animal, bebida, comida] = array;

console.log(comida, animal, bebida); // arroz gato água

// exercicio 3
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

const [num1, num2, num3] = numerosPares;


console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo