//exercicio 1

const fatorial = n => {
    let fat = 1;
    for(let i = 1; i <= n; i += 1) {
        fat *= i;
    }

    console.log(fat);
}

fatorial(5);

//exercicio 2

let frase = "Antônio foi no banheiro e não sabemos o que aconteceu" // retorna 'aconteceu'

const longestWord = frase => {
    let frases = frase.split(' ');
    let longest = frases[0];

    for(let i = 0; i < frases.length; i += 1) {
        if(frases[i].length > longest.length) {
            longest = frases[i];
        }
    }

    return longest
}

console.log(longestWord(frase));

//exercicio 3

const button = document.querySelector('button');
const texto = document.querySelector('h3');

button.addEventListener('click', () => {
    let clicks = parseInt(texto.innerText)
    clicks += 1;

    texto.innerText = clicks;
});


// exercicio 4

const changeX = (frase, string) => {
    frase = frase.replace("x", string);

    return frase;
}

let skills = ['git', 'html', 'javascript', 'css', 'react'];
let hello = changeX('tryber x aqui', 'igor');
const concatString = frase => {
    skills.unshift(frase);

    skills = skills.join(' ');
    return skills;
}

console.log(concatString(hello));



