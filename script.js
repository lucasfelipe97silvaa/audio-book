const botaoPlayPause = document.getElementById('play-pause')
const audioCapitulo = document.getElementById('audio-capitulo')
const botaoAvancar = document.getElementById('proximo')
const botaoVoltar = document.getElementById('anterior')
const nomeCapitulo = document.getElementById('capitulo')


const numeroFaixa = 9; 
let taTocando = 0;
let capituloAtual = 1; 

function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle');
    botaoPlayPause.classList.add('bi-pause-circle');
}

function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause-circle');
    botaoPlayPause.classList.add('bi-play-circle');
}

function tocarOuPausar(){
    if( taTocando === 0){
        tocarFaixa();
        taTocando = 1; 
    }else {
        pausarFaixa();
        taTocando = 0; 
    }
}

function trocarNomeDaFaixa(){
    nomeCapitulo.innerText = 'Capitulo ' + capituloAtual;
}

function proximaFaixa(){
    if(capituloAtual === numeroFaixa){
        capituloAtual = 1;
    }else {
        capituloAtual = capituloAtual + 1 ; 
    }

    audioCapitulo.src = './books/' + capituloAtual + '.mp3'
    tocarFaixa();
    taTocando = 1; 
    trocarNomeDaFaixa();
}

function voltarFaixa(){
    if(capituloAtual === 1){
        capituloAtual = numeroFaixa;
    }else {
        capituloAtual = capituloAtual - 1 ; 
    }

    audioCapitulo.src = './books/' + capituloAtual + '.mp3'
    tocarFaixa();
    taTocando = 1; 
    trocarNomeDaFaixa();
}

botaoPlayPause.addEventListener('click',tocarOuPausar)
botaoAvancar.addEventListener('click', proximaFaixa)
botaoVoltar.addEventListener('click', voltarFaixa) 