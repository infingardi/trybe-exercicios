const a = 10;
const b = 40;
const c = 130;


if(!(a > 0 && b > 0 && c > 0))
    console.log("Angulo invalido");
else if(a + b + c === 180)
    console.log(true);
else
    console.log(false);