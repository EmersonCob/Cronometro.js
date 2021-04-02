"use strict"

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000; // quantos milésimos valem 1 segundo?
var cron;

// Inicia o tempo
function start(){
    cron = setInterval(() => { timer(); }, tempo);
}

// Para o temporizador, porem não limpa as variáveis
function pause() {
    clearInterval(cron);
}

// Para o temporizador e limpa as variáveis
function stop(){
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

// Faz a contagem do tempo e exibição
function timer(){
    ss++; // Incrementa +1 na variável ss

    if(ss == 60) { // verifica se deu 59 segundos
        ss = 0; //  volta os segundos para 0
        mm++; // adiciona +1 na variável mm

        if(mm == 60) { // verifica se deu 59 minutos
            mm = 0; // volta os minutos para 0
            hh++; // adiciona +1 na variável hh
        }
    }

    // cria uma variável com o valor tratado no formato HH:MM:SS
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
    // insere o valor tratado no elemento counter
    document.getElementById('counter').innerText = format;

    // retorna o valor tratado
    return format;
}