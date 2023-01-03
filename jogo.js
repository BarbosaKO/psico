
var largura = 0;
var altura = 0;

function ajustaTamanhoPalcoJogo(){
    largura = window.innerWidth;
    altura = window.innerHeight;

    console.log(largura+'x'+altura);
}

function posicaoRandomica(){
    ajustaTamanhoPalcoJogo();
    var posicaoX = Math.floor(Math.random() * largura) - 120;
    var posicaoY = Math.floor(Math.random() * altura) - 120;
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;
    console.log(posicaoX, posicaoY);

    //Criação do mosquito
    var mosquito = document.createElement('img');
    var numFoto = Math.floor(Math.random() * 9);
    console.log(numFoto);
    var foto = "";
    switch (numFoto) {
        case 0:
            foto = "imagens/psico01.jpeg";
            break;
        case 1:
            foto = "imagens/psico02.jpeg";
            break;
        case 2:
            foto = "imagens/psico03.jpeg";
            break;
        case 3:
            foto = "imagens/psico04.jpeg";
            break;
        case 4:
            foto = "imagens/psico05.jpeg";
            break;
        case 5:
            foto = "imagens/psico06.jpeg";
            break;
        case 6:
            foto = "imagens/psico07.jpeg";
            break;
        case 7:
            foto = "imagens/psico08.jpeg";
            break;
        case 8:
            foto = "imagens/psico09.jpeg";
            break;
    }    

    mosquito.src = foto;
    mosquito.className = tamanhoAleatorio();
    mosquito.style.left = posicaoX+'px';
    mosquito.style.top = posicaoY+'px';
    mosquito.style.position = 'absolute';
    document.body.appendChild(mosquito);
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3);
    switch (classe) {
        case 0:
            return 'mosquito0';
        case 1:
            return 'mosquito1';
        case 2:
            return 'mosquito2';
    }
}
