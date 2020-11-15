/*
Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.
*/

//array con lista mail accettate
var mailingList = ['ale_ferraro@libero.it', 'mariorossi@gmail.com', 'pincopallo@virgilio.it'];

// mail dell'utente
var userMail = prompt('Ciao! Inserisci la tua mail.');

console.log('Mailing List:' + mailingList);
console.log('User Mail:' + userMail);

// confronto se la mail dell'utente è presente o no nella lista mail
var accepted = false;

for (var i = 0; i < mailingList.length; i++) {

  if (mailingList[i] == userMail) {
    accepted = true;
  }
}


// in base al risultato del calcolo vado a stampare il messaggio corretto
if (accepted) {
  document.getElementById('message').innerHTML = 'Accesso Consentito';
} else {
  document.getElementById('message').innerHTML = 'Accesso Negato';
}

/*
Gioco dei dadi
Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

//definisco le variabili che andranno a generare i risultati dei dadi
var dado1 = Math.round(Math.random()*5+1);
var dado2 = Math.round(Math.random()*5+1);

//stampo sul documento il risultato dei dadi
document.getElementById('dado1').innerHTML = 'Dado Utente: ' + dado1;
document.getElementById('dado2').innerHTML = 'Dado AI: ' + dado2;


//confronto i risultati e imposto il messaggio appropriato
if (dado1 > dado2) {
  document.getElementById('winner').innerHTML = 'Complimenti! Hai vinto!';
} else if (dado1 < dado2) {
  document.getElementById('winner').innerHTML = 'Oh no! Hai perso!';
} else {
  document.getElementById('winner').innerHTML = 'Pareggio!';
}
