var clockText = document.getElementById('digitalClock');
var datumText = document.getElementById('datum');


function timer(){ 
    var huidigeTijd = new Date();
    var uur = huidigeTijd.getHours();
    var minuut = huidigeTijd.getMinutes();
    var seconden = huidigeTijd.getSeconds(); 
    clockText.textContent = uur + ':' + minuut + ':' + seconden;
    setTimeout(timer, 1000)
}

var datum = new Date();

var maand = datum.getDate();
var dag = datum.getDay()+1;
var jaar = datum.getFullYear();


datumText.textContent = maand + '/' + dag + '/' + jaar;

function kleurSwap (){
    var uurKleur = datum.getHours();
    var bcKleur = document.getElementById('colorSwap');
    if (uurKleur >= 6 && uurKleur <= 18){
        bcKleur.classList.add('colorDay');
        bcKleur.classList.remove('colorNight');
    }
    else {
        bcKleur.classList.add('colorNight');
        bcKleur.classList.remove('colorDay');
    }
    console.log(uurKleur);
    setTimeout('kleurSwap', 1000)
}

