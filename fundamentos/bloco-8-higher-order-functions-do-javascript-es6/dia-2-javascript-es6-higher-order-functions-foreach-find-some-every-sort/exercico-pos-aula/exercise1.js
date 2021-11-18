const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// exercicio 1
function authorBornIn1947() {
  return books.find(book => book.author.birthYear === 1947);
}

console.log(authorBornIn1947());

// exercicio 2
function smallerName() {
  let nameBook = books[0].name;
  books.forEach(book => {
    if (book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  })
  return nameBook;
}

console.log(smallerName());

// exercicio 3
function getNamedBook() {
  return books.find(book => book.name.length === 26);
}

console.log(getNamedBook());

//exercicio 4

function booksOrderedByReleaseYearDesc() {
  return books.sort((a, b) => a.releaseYear - b.releaseYear);
}

console.log(booksOrderedByReleaseYearDesc());

// exercicio 5
function everyoneWasBornOnSecXX() {
  return books.every(book => book.author.birthYear >= 2000);
}

console.log(everyoneWasBornOnSecXX());

// exercicio 6
function someBookWasReleaseOnThe80s() {
  return books.some(book => book.releaseYear >= 1980 && book.releaseYear < 1990);
}

console.log(someBookWasReleaseOnThe80s());

// exercicio 7
function authorUnique() {
  books.sort((a, b) => a.author.birthYear = b.author.birthYear);
  return !books.some((book, index) => book.author.birthYear == books[index + 1].author.birthYear);
}

console.log(authorUnique());
