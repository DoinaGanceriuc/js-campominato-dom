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
const singolaCellaElement = document.getElementsByClassName("cella")
/* console.log(singolaCellaElement); */


/**
 * Questa funzione cicla una serie di elementi in base al valore che riceve in ingresso
 * @param {number} valCiclo - indica il valore da ricevere in input
 */
let eventoClick = false;
function ciclaElementi(valCiclo) {

    //ciclo for
    for (let i = 1; i <= valCiclo; i++) { 
    let cellaElement = document.createElement("div");
    cellaElement.append(i)
    cellaElement.classList.add("cella");
    containerElement.append(cellaElement);
    /* console.log(cellaElement); */

    // evento sul click
    cellaElement.addEventListener("click",function () {
    const valoreCella = Number(this.innerText);
    /* this.style.backgroundColor = "blue"; */
  if (bombs.includes(valoreCella)) {
        console.log("bomba");
        this.style.backgroundColor = "red";
        alert("hai perso")
        eventoClick = true;
        console.log(eventoClick);
        
    } else {
        console.log("continua");
        this.style.backgroundColor = "lightBlue";
    }

    })





}  
}


/* In seguito l'utente clicca su ogni cella:
se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.   */      
   

/*     if (eventoClick == true) {
    console.log(cellaElement.removeEventListener("click", addListen));;
} */


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
const livelloDifficolta = levelPlay();
/* console.log(livelloDifficolta); */

/* Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
*/

function pcRandomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
/* pcRandomNumbers(1, levelPlay()); */

// I numeri nella lista delle bombe non possono essere duplicati.

function getPcListRandomNumbers(range) {
    const listaNumbers = [];

    while (listaNumbers.length < 16) {
    const randomNumber = pcRandomNumbers(1, range)
    if(!listaNumbers.includes(randomNumber)) {
        listaNumbers.push(randomNumber)
         console.log(randomNumber);
    }
}
return listaNumbers;
}

const bombs = getPcListRandomNumbers(livelloDifficolta)



/* La partita termina quando
il giocatore clicca su una bomba
o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve scoprire tutte le bombe e comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito (16).
*/


/* function removeClick () {

   cellaElement.removeEventListener("click", addListen);

}


removeClick()
 */

// ciclare tra le celle

function coloraCelle()  {
    for (let index = 0; index < singolaCellaElement
    .length; index++) {
    let singolaCella = singolaCellaElement[index];
    console.log(singolaCella);
    let numeroCella = parseInt(singolaCella.textContent);
    console.log(numeroCella);

     
       /*   verifyBomb(numeroCella) */
     if (bombs.includes(numeroCella)) {
        singolaCella.style.backgroundColor = "red";
        return singolaCella
    }
}
    

/*  coloraCelle()   */
   if (eventoClick == true) {
       coloraCelle()
   }


    
    // element.addEventListener("click", handleClick() 
        // prendere il contenuto della cella
       /*  const cellNumber = parseInt(this.innerText)
        console.log(cellNumber);
        is_a_bomb(cellNumber, bombs) */

    //)

}

function verifyBomb(valoreCella){

    if (bombs.includes(valoreCella)) {
        console.log("bomba");
        /* valoreCella.classList.add() = "red"; */
        
    } else {
        console.log("continua");
        /* valoreCella.classList.add() = "blue"; */
    }
}
