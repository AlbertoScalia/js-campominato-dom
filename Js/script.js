// Assegno una costante all'elemento container
const squareContainer = document.querySelector('.container');

//Assegno una costante all'elemento bottone
const btnClick = document.getElementById('play');

// Creo un addEventListener legato al click del bottone
btnClick.addEventListener('click', function () {
    //A ogni clicco del bottone evito di creare altre celle
    squareContainer.innerHTML = '';
    //Creo il ciclo che genererà la griglia con le cento celle 
    let i = 1
    while (i <= 100) {
        const squareElement = document.createElement('div');
        squareElement.classList.add('square');
        squareElement.innerHTML = `${i}`;
        squareContainer.append(squareElement);
        i++;
    }

    //Assegno una variabile alla classe delle celle
    const squares = document.querySelectorAll('.square');

    // Creo un ciclo per selezionare ciascuna cella
    for (let i = 0; i < squares.length; i++) {
        const squareSelector = squares[i];
        //Creo un addEventListener per colorare ogni cella selezionata
        squareSelector.addEventListener('click', function () {
            squareSelector.classList.add('square_click');
            //Messaggio in console con il numero della cella cliccata.
            console.log(`Hai selezionato la casella n. ${squareSelector.innerHTML}.`);
        })
    }

})



















