/* Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo. */

var mailingList = ['ale_ferraro@libero.it', 'mariorossi@gmail.com', 'pincopallo@virgilio.it'];

var userMail = prompt('Ciao! Inserisci la tua mail.')

console.log('Mailing List:' + mailingList);
console.log('User Mail:' + userMail);

for (var i = 0; i < mailingList.length; i++) {
  var accepted = false;

  if (mailingList[i] == userMail.value) {
    accepted = true;
  }

  if (accepted) {
  document.getElementById('message').innerHTML = 'email accepted';
  } else {
  document.getElementById('message').innerHTML = 'email denied';
  }
}
