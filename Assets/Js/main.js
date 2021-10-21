/* Consegna: 
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */


/* Strumenti
-prompt
-querySelector/getElementById
-ciclo for
-eventListener
-if/else
-function
*/

// inizializzazione delle variabili
const chooseLevel = prompt("Scegli il livello di difficoltà[1/2/3]")
const levelOne = "1";
const levelTwo = "2"; 
const levelThree = "3";

// selezionare elementi DOM
const containerElement = document.querySelector(".container");


/**
 * Questa funzione cicla una serie di elementi in base al valore che riceve in ingresso
 * @param {string} valCiclo - indica il valore da ricevere in input
 */
function ciclaElementi(valCiclo) {

    //ciclo for
    for (let i = 1; i <= valCiclo; i++) { 
    let cellaElement = document.createElement("div");
    cellaElement.className = "cella";
    cellaElement.innerHTML = i;
    containerElement.insertAdjacentElement("beforeend", cellaElement)

    // evento sul click
    cellaElement.addEventListener("click", function() {
    this.style.backgroundColor = "lightBlue";
    })


}  
}

// Invocare una funzione
ciclaElementi(levelPlay());

/**
 * Questa funzione ha lo scopo di definire qual è il livello del gioco e restiuisce una stringa diversa in base alla difficoltà del livello
 * @returns {string} - indica il valore che resituisce se la condizione si verifica o meno
 */
function levelPlay() {
    // condizione di verifica
    if (chooseLevel == levelOne){
        return "100"
    } else if (chooseLevel == levelTwo) {
        return "81"
    } else {
        return "49"
    }
}
// Invocare una funzione
levelPlay();