/* Consegna: 
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.







*/


/* Strumenti
-prompt
-querySelector/getElementById
-ciclo for
-eventListener
-if/else
-function
*/

// inizializzazione delle variabili
const chooseLevel = Number(prompt("Scegli il livello di difficoltà[1/2/3]"))
const levelOne = 1;
const levelTwo = 2; 
const levelThree = 3;

// selezionare elementi DOM
const containerElement = document.querySelector(".container");


/**
 * Questa funzione cicla una serie di elementi in base al valore che riceve in ingresso
 * @param {number} valCiclo - indica il valore da ricevere in input
 */
let cellaElement;
let eventoClick = false;
function ciclaElementi(valCiclo) {

    //ciclo for
    for (let i = 1; i <= valCiclo; i++) { 
    cellaElement = document.createElement("div");
    cellaElement.className = "cella";
    cellaElement.innerHTML = i;
    containerElement.insertAdjacentElement("beforeend", cellaElement)

    // evento sul click
    cellaElement.addEventListener("click",addListen)


}  
}
function addListen() {

/* In seguito l'utente clicca su ogni cella:
se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.   */      
    const valoreCella = Number(this.innerText);
    this.style.backgroundColor = "lightBlue";
    if (listaNumbers.includes(valoreCella)) {
        console.log("bomba");
        this.style.backgroundColor = "red";
        eventoClick = true;
        console.log(eventoClick);
        
    } else {
        console.log("continua");
        this.style.backgroundColor = "lightBlue";
    }




    
    }

// Invocare una funzione
ciclaElementi(levelPlay());

/**
 * Questa funzione ha lo scopo di definire qual è il livello del gioco e restiuisce una stringa diversa in base alla difficoltà del livello
 * @returns {number} - indica il valore che resituisce se la condizione si verifica o meno
 */
function levelPlay() {
    // condizione di verifica
    if (chooseLevel == levelOne){
        return 100
    } else if (chooseLevel == levelTwo) {
        return 81
    } else {
        return 49
    }
}
// Invocare una funzione
levelPlay();

/* Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
*/

function pcRandomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
/* pcRandomNumbers(1, levelPlay()); */

// I numeri nella lista delle bombe non possono essere duplicati.
const listaNumbers = [];
let randomNumber

while (listaNumbers.length < 16) {
    randomNumber = pcRandomNumbers(1, levelPlay())
    if(!listaNumbers.includes(randomNumber)) {
        listaNumbers.push(randomNumber)
         console.log(randomNumber);
    }
}
console.log(listaNumbers);

/* La partita termina quando
il giocatore clicca su una bomba
o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve scoprire tutte le bombe e comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito (16).
*/

// se hai cliccato sulla bomba hai perso
// se hai cliccato per 16 volte e non hai mai preso una bomba hai vinto
// fai vedere tutti i numeri dell'array al termine


if (eventoClick == true) {
    console.log("qualcosa");
  /*  console.log(cellaElement.removeEventListener("click", addListen));  */


    
}


