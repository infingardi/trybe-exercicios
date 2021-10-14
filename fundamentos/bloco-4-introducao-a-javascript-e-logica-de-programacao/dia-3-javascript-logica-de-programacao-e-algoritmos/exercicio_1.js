let n = 7;
let linha = '';


//exercicio 1
for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(n));
}


//exercicio 2
for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i));
}

// exercicio 3
let texto = [];

for (let i = 0; i < n; i++)
    texto.push(' ');

for (let i = 0; i < texto.length; i++) {
    texto[texto.length - i - 1] = '*';
    console.log(texto.join(''));
}

// exercicio 4
if (n % 2 == 1) {
    let texto2 = [];

    for (let i = 0; i < n; i++)
        texto2.push(' ');

    let j = 0;
    for (let i = 0; i < n; i++) {
        texto2[Math.floor(n / 2) - j] = '*';
        texto2[Math.floor(n / 2) + j] = '*';
        if(i != 0)
            i++;
        j++;
        console.log(texto2.join(''));
    }
}
