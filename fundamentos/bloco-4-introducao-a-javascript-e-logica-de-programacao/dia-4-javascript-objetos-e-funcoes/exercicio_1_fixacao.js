// 1- Crie um objeto player contendo as variáveis listadas abaixo

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals:{ golden: 2, silver: 3},
};

// 2- Acesse as chaves name , lastName e age e concatene as suas informações

console.log('A jogadora ' + player.name + ' ' + player.lastName + 'tem ' + player.age + ' anos de idade.');

//3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array 

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(player.bestInTheWorld);

//4 - Acesse a chave bestInTheWorld e faça um console.log

console.log('A jogadora '+ player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por 6 vezes.');

//5 - Acesse a chave medals e faça um console.log

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver +' medalhas de prata');
