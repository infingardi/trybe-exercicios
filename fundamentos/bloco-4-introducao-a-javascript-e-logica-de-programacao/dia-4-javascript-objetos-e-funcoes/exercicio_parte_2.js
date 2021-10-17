//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindrome(texto) {
    let palindromeVerify = true;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== texto[texto.length - i - 1]) {
            palindromeVerify = false;
        }
    }

    return palindromeVerify;
}

console.log(verificaPalindrome('desenvolvimento'));

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function indiceMaiorValor(array) {
    let maior = [array[0], 0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior[0]) {
            maior[0] = array[i];
            maior[1] = i;
        }
    }

    return maior[1];
}

console.log(indiceMaiorValor([2, 3, 6, 7, 10, 1]));

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function indiceMenorValor(array) {
    let menor = [array[0], 0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < menor[0]) {
            menor[0] = array[i];
            menor[1] = i;
        }
    }

    return menor[1];
}

console.log(indiceMenorValor([2, 4, 6, 7, 10, 0, -3]));

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorNome(names) {
    let mNome = names[0];
    for (let i = 0; i < names.length; i++) {
        if (names[i].length > mNome.length) {
            mNome = names[i];
        }
    }
    return mNome;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function repeteMais(array) {
    let arrayRepitido = [[array[0], 0]];

    for (let i = 0; i < array.length; i++) {
        let encontrou = false
        for (let j = 0; j < arrayRepitido.length; j++) {
            if (array[i] == arrayRepitido[j][0]) {
                arrayRepitido[j][1]++;
                encontrou = true;
                break;
            }
        }
        if (!encontrou) {
            arrayRepitido.push([array[i], 1]);
        }
    }

    let maisRepete = arrayRepitido[0];
    for (let i = 0; i < arrayRepitido.length; i++) {
        if(arrayRepitido[i][1] > maisRepete[1] ){
            maisRepete = arrayRepitido[i];
        }
    }

    return maisRepete[0];
}

console.log(repeteMais([2 , 3, 2, 5, 8, 2, 3]));

//6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function retornaSoma(numero){
    let soma = 0;
    for (let i = 0; i <= numero; i++) {
        soma += i;
    }

    return soma;
}

console.log(retornaSoma(5));

//7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function verificaFimPalavra(word, ending){
    let indexEnding = ending.length - 1;
    let verificaIgualdade = true;

    for (let i = word.length - 1; i >= Math.abs(ending.length - word.length) ; i--) {
        if(word[i] != ending [indexEnding]){
            verificaIgualdade = false;
        }
        indexEnding--;
    }

    return verificaIgualdade;
}

console.log(verificaFimPalavra('trybe', 'be'));
