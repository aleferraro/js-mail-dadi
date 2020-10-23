/* Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo. */

var mailingList = ['ale_ferraro@libero.it', 'mariorossi@gmail.com', 'pincopallo@virgilio.it'];

var userMail = prompt('Ciao! Inserisci la tua mail.')

console.log('Mailing List:' + mailingList);
console.log('User Mail:' + userMail);

var accepted = false;

for (var i = 0; i < mailingList.length; i++) {

  if (mailingList[i] == userMail) {
    accepted = true;
  }
}

if (accepted) {
  document.getElementById('message').innerHTML = 'Accesso Consentito';
} else {
  document.getElementById('message').innerHTML = 'Accesso Negato';
}

/* Gioco dei dadi
Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
Stabilire il vincitore, in base a chi fa il punteggio più alto. */
