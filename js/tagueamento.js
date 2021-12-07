// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.
/*
let timer,
		timeoutVal = 1000; // tempo sem ações para enviar o evento em ms

const status = document.getElementById('status');
const typer = document.getElementById('typer');

typer.addEventListener('keypress', handleKeyPress);
typer.addEventListener('keyup', handleKeyUp);

// when user is pressing down on keys, clear the timeout
function handleKeyPress(e) {
	window.clearTimeout(timer);
  status.innerHTML = 'Typing...';
}

// when the user has stopped pressing on keys, set the timeout
// if the user presses on keys before the timeout is reached, then this timeout is canceled
function handleKeyUp(e) {
	window.clearTimeout(timer); // prevent errant multiple timeouts from being generated
	timer = window.setTimeout(() => {
        ga('send', 'pageview');
  }, timeoutVal);
}


var input =  document.getElementById('my-input');

// Add an event listener to monitor changes
input.addEventListener('keyup', function (e) {
    console.log('Value:', input.value);
});*/