//assegno alla variabile gameOver il valore false che poi cambierà nel corso del gioco
let gameOver = false;

// Assegno una costante all'elemento container
const squareContainer = document.querySelector('.container');

//Assegno una costante all'elemento bottone
const btnClick = document.getElementById('play');

//Assegno una costante all'id "difficulty"
const difficulty = document.getElementById('difficulty');

// Creo la funzione per generare 16 numeri random
function randomGenerator(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//Creo l'array vuoto
let numberGenerator = [];

//Assegno una costante al massimo dei numeri che devono essere generati
const maxRandomNumber = 16;

//Creo la funzione per generare l'array che conterrà i numeri
function createNumbArray(maxSqaures) {
    let i = 1;
    while (i <= maxRandomNumber) {
        let randomNumb = randomGenerator(1, maxSqaures); 
        if (!numberGenerator.includes(randomNumb)) {
            numberGenerator.push(randomNumb);
        } else {
            continue;
        }
        i++;
    }
    console.log(numberGenerator);
}


//Lavoro sulla creazione della griglia 

let maxSqaures;

function selectDifficulty() {
    //Stabilisco la difficoltà in base al valore scelto nel select 
    if (difficulty.value == 1) {
        maxSqaures = 100;
    } else if (difficulty.value == 2) {
        maxSqaures = 81;
    } else if (difficulty.value == 3) {
        maxSqaures = 49;
    }
    //Resetto l'array quando viene cambiato il livello
    numberGenerator = [];
}

//Creo la funzione che genera la griglia
function generateGrid(maxSqaures) {
    //A ogni clicco del bottone evito di creare altre caselle
    squareContainer.innerHTML = '';
    //Ciclo che genera il numero di caselle a seconda della difficoltà scelta
    let i = 1;
    while (i <= maxSqaures) {
        const squareElement = document.createElement('div');
        squareElement.style.width = `calc(100% / ${Math.sqrt(maxSqaures)}`;
        squareElement.classList.add('square');
        squareElement.innerHTML = `${Number(i)}`;
        squareContainer.append(squareElement);
        i++;
    }
}


//Creo la funzione per cliccare sulle caselle
function clickedSquare(array) {
    //Assegno la costante alle caselle
    const squares = document.querySelectorAll('.square');
    //Assegno un valore provvisorio al numero di click
    let numbOfClick = 0;
    //stabilisco il numero massimo delle volte in cui si può cliccare in una partita
    const maxClick = maxSqaures - maxRandomNumber;

    // Creo un ciclo per selezionare ciascuna casella
    for (let i = 0; i < squares.length; i++) {
        //Seleziono ogni singola casella e la assegno ad una variabile
        const square = squares[i];
        //Creo un addEventListener al click
        square.addEventListener('click', function () {
            //Se il numero della casella cliccata corrisponde a un numero dell'array questa si colora di rosso
            if (numberGenerator.includes(Number(square.innerHTML))) {
                square.classList.add('square_red');
                alert('Hai perso!');
                gameOver = true;
            
                return;
            } else {
                //Altrimenti si colora di verde
                square.classList.add('square_click');
                console.log(`Hai selezionato la casella n. ${square.innerHTML}.`);
                numbOfClick++;
                //se il numero dei click è uguale al maxClick si attiva il console.log di vittoria
                if (numbOfClick === maxClick) {
                    console.log(`Hai vinto! Hai cliccato ${numbOfClick} volte senza beccare una bomba!`);
                    gameOver = true;
                    return;
                }
            }
        })
    }
}

// Creo un addEventListener che attivi le funzioni precedenti
btnClick.addEventListener('click', function () {
    selectDifficulty();
    createNumbArray(maxSqaures);
    generateGrid(maxSqaures);
    clickedSquare(numberGenerator);

    if (gameOver) {
        return;
    }
})













