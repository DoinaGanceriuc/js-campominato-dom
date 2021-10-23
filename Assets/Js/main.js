/* Consegna: 
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
In seguito l'utente clicca su ogni cella:
se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
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
const livelloDifficolta = levelPlay();
const bombs = getPcListRandomNumbers(livelloDifficolta)
console.log(bombs);
let contatore = 0;
const chanceToWin = levelPlay() - bombs.length;

// selezionare elementi DOM
const containerElement = document.querySelector(".container");
const singolaCellaElement = document.getElementsByClassName("cella")
/* console.log(singolaCellaElement); */


/**
 * Questa funzione cicla una serie di elementi in base al valore che riceve in ingresso
 * @param {number} valCiclo - indica il valore da ricevere in input
 */


function ciclaElementi(valCiclo) {

    //ciclo for
    for (let i = 1; i <= valCiclo; i++) { 
    let cellaElement = document.createElement("div");
    cellaElement.append(i);
    cellaElement.classList.add("cella");
    containerElement.append(cellaElement);


    cellaElement.addEventListener("click", aggiungiClick)
    
    


}  
}
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
         /* console.log(randomNumber); */
    }
}
return listaNumbers;
}



/* La partita termina quando
il giocatore clicca su una bomba
o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve scoprire tutte le bombe e comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito ().
*/


// ciclare tra le celle

function ciclaCelle(){
     for (let index = 0; index < singolaCellaElement
    .length; index++) {
    let singolaCella = singolaCellaElement[index];
    /* console.log(singolaCella); */ //div di tutte le celle che devono essere colorate
    let numeroCella = parseInt(singolaCella.textContent);
    /* console.log(numeroCella); */ // numero tutte le celle da 1 a 49
    
    coloraCelle(numeroCella, singolaCella)
    rimuoviClick(singolaCella, aggiungiClick)
    // singolaCella.removeEventListener("click", aggiungiClick)
}
}

function aggiungiClick() {
    const valoreCella = Number(this.innerText);
    //console.log(valoreCella);
    this.style.backgroundColor = "lightBlue";
    contatore = contatore + 1;
    //console.log("hai cliccato sul blu: " + contatore);
    if (verifyBomb(valoreCella)) {
        console.log("bomba");
        /* alert("Hai  ") */
        document.getElementById("result").innerHTML = `Hai perso! Hai cliccato solo ${Number(contatore-1)} numeri consentiti rispetto ai ${chanceToWin} previsti`
        /* console.log("hai cliccato sul blu fino alla bomba x n: " + Number(contatore-1)); */
        this.style.backgroundColor = "red";
         ciclaCelle()
    } else {
        console.log("continua");
        vittoria();
    }

    }


function verifyBomb(valoreCella){

    if (bombs.includes(valoreCella)) {
       return true
    } 
    return false
}




function coloraCelle(numeroDellaCella, tutteLeCelle) {
    
        if (bombs.includes(numeroDellaCella)) {

           return tutteLeCelle.style.backgroundColor = "red"
    }
    return false
}
 
/* per vincere:
- clicca fino a n volte senza prendere una bomba
- mostrare il numero delle volte cliccate
*/


function vittoria(){
    if (contatore == chanceToWin){
        document.getElementById("result").innerHTML = `HAI VINTO!!! Hai cliccato per ${contatore} volte`
        ciclaCelle()
    }
}

function rimuoviClick(tutteCelle, funzioneDaPassare){
    tutteCelle.removeEventListener("click", funzioneDaPassare)

}
