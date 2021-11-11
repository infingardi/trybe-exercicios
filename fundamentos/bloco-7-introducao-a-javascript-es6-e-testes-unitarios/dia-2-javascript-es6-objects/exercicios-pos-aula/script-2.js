const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// 1
function addValue(objeto, key, value) {
    objeto[key] = value;
}

addValue(lesson2, 'turno', 'noite');
console.log(lesson2);


// 2
function showKeys(objeto) {
    console.log(Object.keys(objeto));
}

showKeys(lesson3);

// 3
function showLength(objeto) {
    console.log(Object.keys(objeto).length);
}

showLength(lesson3);

// 4

function showValues(objeto) {
    console.log(Object.values(objeto));
}

showValues(lesson1)

// 5
const allLessons = {};

Object.assign(allLessons, {lesson1, lesson2, lesson3});
console.log(allLessons);

// 6
function numberOfStudents(objeto) {
    let students = 0;
    let keys = Object.keys(objeto)
    for (let i = 0; i < keys.length; i++) {
        students += objeto[keys[i]].numeroEstudantes
    }

    console.log(students);
}

numberOfStudents(allLessons);

// 7
function getValueByNumber(objeto, index) {
    console.log(Object.values(objeto)[index]);
}

getValueByNumber(lesson1, 0)

// 8

function verifyPair(objeto, key, value) {
    let arrays = Object.entries(objeto);
    let bool = false;
    for (let i = 0; i < arrays.length; i++) {
        if(arrays[i][0] == key && arrays[i][1] == value) {
            bool = true;
        }
    }

    console.log(bool);
}

verifyPair(lesson3, 'turno', 'noite');