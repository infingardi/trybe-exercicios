// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maça', 'mamão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['aveia', 'leite condensado', 'achocolatado'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));