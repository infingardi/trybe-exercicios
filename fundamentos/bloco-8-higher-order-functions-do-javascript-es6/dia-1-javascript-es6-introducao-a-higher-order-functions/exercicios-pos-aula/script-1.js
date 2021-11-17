//exercicio 1
const createObject = (nomeCompleto) => ({nomeCompleto, email: `${nomeCompleto}@trybe.com`});

const newEmployees = () => {
    const employees = {
        id1: createObject('Pedro_Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: createObject('Luiza_Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: createObject('Carla_Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

console.log(newEmployees());

//exercicio 2
const drawResult = (number, checkNumber) => {
    let rand = Math.round(Math.random() * 5);

    return checkNumber(number, rand) ? 'Parabéns você ganhou!' : 'Tente novamente';
}

const checkNumber = (number, rand) => number === rand ? true : false;

console.log(drawResult(1, checkNumber));

//exercicio 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const returnPoints = (gabarito, answer, checkAnswer) => checkAnswer(gabarito, answer);

const checkAnswer = (gabarito, answer) => {
    let points = 0;
    for (let i = 0; i < gabarito.length; i += 1) {
        if(gabarito[i] === answer[i]){
            points += 1;
        } else if (answer[i] === 'N.A') {
        } else {
            points -= 0.5;
        }
    }

    return points;
}

console.log(returnPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswer));
