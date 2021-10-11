const custo = 10;
const venda = 30;

if(!(custo >= 0 && venda >= 0))
    console.log("Numeros invalidos");
else{
    let imposto = custo * 1.2;
    let valorCustoTotal = custo + imposto;

    let lucro = venda - valorCustoTotal;
    
    console.log(lucro * 1000);
}