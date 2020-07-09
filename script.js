// Un alert espone 5 numeri casuali (univoci).
// Poi parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

var arrayRand = [];

// Definisco l'alert che dia i 5 numeri casuali
for (var i = 0; i < 5; i++) {
  var numRand = getRandom (1, 100);
  arrayRand.push(numRand);
  console.log(numRand);
}

alert('Hai 30 secondi per tenere a mente questi numeri--> ' + arrayRand);
console.log(arrayRand);

// L'utente tramite i prompt deve inserire i numeri elencati prima
setTimeout(insertNumber, 30000);

// Function
function insertNumber() {
  var arrayUt = [];
  for (var i = 0; i < 5; i++) {
    var numUt = parseInt(prompt('Inserisci un numero.'));
    for (var j = 0; j < arrayRand.length; j++) {
      if(arrayRand[j] == numUt){
        arrayUt.push(numUt);
      }
    }
    console.log(numUt);
  }
  alert(' Hai indovinato ' + arrayUt.length + ' numeri' +
  '\n Questi sono i numeri indovinati: ' + arrayUt);
}

function getRandom (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}
