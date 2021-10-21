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

function createDaysOnCalendary() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let listaDeDias = document.querySelector('#days');
    
    for (const day of dezDaysList) {
        let dia = document.createElement('li');
        dia.classList.add('day');
        dia.textContent = day;

        if(day == 24 || day === 25 || day === 31){
            dia.classList.add('holiday');
        }

        if(day == 4 || day === 11 || day === 18 || day == 25){
            dia.classList.add('friday');
        }
        listaDeDias.appendChild(dia);
    }
}

createDaysOnCalendary();

function createButtonHoliday(feriados) {
    let btn = document.createElement('button');
    let container = document.querySelector('.buttons-container');
    btn.id = 'btn-holiday';
    btn.textContent = feriados;

    container.appendChild(btn);
}

createButtonHoliday('feriados');

let btn = document.querySelector('#btn-holiday');

btn.addEventListener('click', mudaCor);

function mudaCor(elemento) {
    elementoCor = elemento.target.style.backgroundColor;
    if(elementoCor == 'green'){
        elementoCor = 'rgb(233,233,233)';
    } else {
        elementoCor = 'green';
    }
    console.log(elemento.target.style.backgroundColor);
}


