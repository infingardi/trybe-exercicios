let allStates = ['Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espirito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso do Sul',
    'Mato Grosso',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins'];

let select = document.querySelector('#select-estados');
let submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', submitAction);

function submitAction(event) {
    event.preventDefault();
}

for (let i = 0; i < allStates.length; i += 1) {
    let option = document.createElement('option');
    option.textContent = allStates[i];
    select.appendChild(option);
    
}