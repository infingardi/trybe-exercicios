const wakingUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const sleepTime = () => 'Partiu dormir!!';

const doingThings = func => func();

console.log(doingThings(sleepTime));
