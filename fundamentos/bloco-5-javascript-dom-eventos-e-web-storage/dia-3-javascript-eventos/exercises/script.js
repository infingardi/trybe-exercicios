function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// exercicio 1
function createDaysOnCalendary() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let listaDeDias = document.querySelector('#days');

    for (const day of dezDaysList) {
        let dia = document.createElement('li');
        dia.classList.add('day');
        dia.textContent = day;

        if (day == 24 || day === 25 || day === 31) {
            dia.classList.add('holiday');
        }

        if (day == 4 || day === 11 || day === 18 || day == 25) {
            dia.classList.add('friday');
        }
        listaDeDias.appendChild(dia);
    }
}

createDaysOnCalendary();

//exercicio 2

function createButtonHoliday(feriados) {
    let btn = document.createElement('button');
    let container = document.querySelector('.buttons-container');
    btn.id = 'btn-holiday';
    btn.textContent = feriados;

    container.appendChild(btn);
}

createButtonHoliday('feriados');


// exercicio 3
let btn = document.querySelector('#btn-holiday');

btn.addEventListener('click', mudaCor);

function mudaCor() {
    let feriados = document.querySelectorAll('.holiday');
    let elementoCor = feriados[0].style.backgroundColor;

    if (elementoCor == 'green') {
        elementoCor = 'rgb(238,238,238)';
    } else {
        elementoCor = 'green';
    }

    for (const feriado of feriados) {
        feriado.style.backgroundColor = elementoCor;
    }
}

// exercicio 4

function createButtonFriday(friday) {
    let btn = document.createElement('button');
    btn.id = 'btn-friday';
    btn.textContent = friday;

    let container = document.querySelector('.buttons-container');
    container.appendChild(btn);
}

createButtonFriday('Sexta-Feira');

// exercicio 5
fridayContent = [];
let btnFriday = document.querySelector('#btn-friday');
let sextas = document.querySelectorAll('.friday');
for (const day of sextas) {
    fridayContent.push(day.textContent);
}

btnFriday.addEventListener('click', modificaTexto);
function modificaTexto() {
    let i = 0;
    for (const sexta of sextas) {
        if (sexta.textContent == 'sextou') {
            sexta.textContent = fridayContent[i];
            i++;
        } else {
            sexta.textContent = 'sextou';
        }
    }
}

// exercicio 6

let listaUl = document.querySelector('#days');

listaUl.addEventListener('mouseover', function (event) {
    if (event.target.id !== 'days') {
        event.target.style.fontSize = '1.5em';
    }
});

listaUl.addEventListener('mouseout', function (event) {
    if (event.target.id !== 'days') {
        event.target.style.fontSize = '20px';
    }
});

// exercicio 7

function createTask(task) {
    let taskTag = document.createElement('span');
    taskTag.textContent = task;

    let container = document.querySelector('.my-tasks');
    container.appendChild(taskTag);
}

createTask('cozinhar');

// exercicio 8

function criaLegendaTask(cor) {
    let myDiv = document.createElement('div');
    myDiv.classList.add('task');
    myDiv.style.backgroundColor = cor;

    let container = document.querySelector('.my-tasks');
    container.appendChild(myDiv);
}

criaLegendaTask('red');

// exercicio 9

function selecionaDiv() {
    let todasTasks = document.querySelectorAll('.task');

    for (const task of todasTasks) {
        task.addEventListener('click', function () {
            if (task.classList[1] === 'selected') {
                task.classList.remove('selected');
            } else {
                task.classList.add('selected');
            }
            console.log(task.classList);
        });
    }
}

selecionaDiv();


// exercicio 10

function mudaCorDiaDoMes() {
    let listaUl = document.querySelector('#days');


    listaUl.addEventListener('click', function (event) {
        if (document.querySelector('.selected')) {
            let taskSelectedColor = document.querySelector('.selected').style.backgroundColor;
            if (event.target.id !== 'days') {
                if (taskSelectedColor === event.target.style.color) {
                    event.target.style.color = 'rgb(119,119,119)';
                } else {
                    event.target.style.color = taskSelectedColor;
                }
            }
        }
    });

}

mudaCorDiaDoMes();





