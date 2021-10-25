let tamanhoFonte = document.querySelector('.fonteTamanho');
let espacamentoLinha = document.querySelector('.espacamento-linha');
let corDeFundo = document.querySelector('.corDeFundo');
let corDeTexto = document.querySelector('.corDeTexto');
let fonteFamily = document.querySelector('.fonte');

let textos = document.querySelectorAll('article p');
let body = document.querySelector('body');

localStorage.clear();

window.onload = function () {
    let tamanho = localStorage.getItem('tamanhoFonte');
    let espacamento = localStorage.getItem('espacamentoLinha');
    let cor = localStorage.getItem('corDeFundo');
    let corDeTexto = localStorage.getItem('corDeTexto');
    let fonte = localStorage.getItem('fonte');

    alteraTamanho(parseInt(tamanho));
    alteraEspacamento(parseInt(espacamento));
    alteraCorDeFundo(cor);
    alteraCorDeTexto(corDeTexto);
    alteraFonte(fonte);
}

tamanhoFonte.addEventListener('change', function (event) {
    let tamanho = event.target.value;
    localStorage.setItem('tamanhoFonte', tamanho + 'px');
    alteraTamanho(tamanho);
})

espacamentoLinha.addEventListener('change', function (event) {
    let espacamento = event.target.value;
    localStorage.setItem('espacamentoLinha', espacamento + 'px');
    alteraEspacamento(espacamento);
})

corDeFundo.addEventListener('change', function (event) {
    let cor = event.target.value;
    localStorage.setItem('corDeFundo', cor);
    alteraCorDeFundo(cor);
})

corDeTexto.addEventListener('change', function (event) {
    let cor = event.target.value;
    localStorage.setItem('corDeTexto', cor);
    alteraCorDeTexto(cor);
})

fonteFamily.addEventListener('change', function (event) {
    let fonte = event.target.value;
    localStorage.setItem('fonte', fonte);
    alteraFonte(fonte);
})

function alteraTamanho(tamanho) {
    tamanhoFonte.value = tamanho;
    for (const texto of textos) {
        texto.style.fontSize = parseInt(tamanho) + 'px';
    }
}

function alteraEspacamento(espacamento) {
    espacamentoLinha.value = espacamento;
    for (const texto of textos) {
        texto.style.lineHeight = parseInt(espacamento) + 'px';
    }
}

function alteraCorDeFundo(cor) {
    body.style.backgroundColor = cor;
    corDeFundo.value = cor;
}

function alteraCorDeTexto(cor) {
    body.style.color = cor;
    corDeTexto.value = cor;
}

function alteraFonte(fonte) {
    body.style.fontFamily = fonte;
    fonteFamily.value = fonte;
}


