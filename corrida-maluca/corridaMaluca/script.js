const tubas = document.getElementById("tubas");
const lontra = document.getElementById("lontra");
const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const turbo1 = document.getElementById("turbo1");
const turbo2 = document.getElementById("turbo2");
const reiniciar = document.getElementById("reiniciar");

const mensagem = document.getElementById("mensagem");
const chegada = document.getElementById("chegada");

let position1 = 0;
let position2 = 0;
let usouTurbo1 = false;
let usouTurbo2 = false;
let terminou = false;

function acelerar(jogador, passo = 15) {
    if(terminou) return;

    const limite = Math.max(0, chegada.offsetLeft - tubas.offsetWidth);
    if(jogador == 1){
        position1 = Math.min(position1 + passo, limite);
        tubas.style.left = `${position1}px`;

        if(position1 >= limite) {
            terminou = true;
            mensagem.textContent = "TUBAS GANHOU !🦈🏆🔥!";
        }
    } if(jogador == 2){
        position2 = Math.min(position2 + passo, limite);
        lontra.style.left = `${position2}px`;

        if(position2 >= limite) {
            terminou = true;
            mensagem.textContent = "LONTRA GANHOU !🦦🏆🔥!";
        }
    }
}

function turbo(jogador) {
    if(jogador == 1 && !usouTurbo1) {
        usouTurbo1 = true;
        acelerar(1, 60);
    }
    if(jogador == 2 && !usouTurbo2) {
        usouTurbo2 = true;
        acelerar(2, 60);
    }
}

botao1.addEventListener("click", function() {acelerar(1)});
botao2.addEventListener("click", function() {acelerar(2)});
turbo1.addEventListener("click", function() {turbo(1)});
turbo2.addEventListener("click", function() {turbo(2)});

document.addEventListener("keydown", function (evento) {
    if(evento.repeat) return;

    const tecla = evento.key.toLowerCase();
    if(tecla === "a") acelerar(1);
    if(tecla === "q") turbo(1);
    if(tecla === "l") acelerar(2);
    if(tecla === "p") turbo(2);
});

reiniciar.addEventListener("click", function() {
    position1 = 0;
    position2 = 0;
    usouTurbo1 = false;
    usouTurbo2 = false;
    terminou = false;

    tubas.style.left = "0px";
    lontra.style.left = "0px";

    mensagem.textContent = "Prepara, aponta e nada fi, vai !!!";
});