/* 

Idea:
make a hangman app
use as an opportunity to teach the debugger

put everything in one big function, or maybe two
    (so we can step-in)

And maybe we can use for refactor exercises?
*/

const secretPhrase = "You can do it";
const guessedLetters = [];

$(document).ready(onReady);

function onReady() {
    // Render empty letter slots for each letter in the phrase
    for (let letter of secretPhrase) {
        if (letter === ' ') {
            $('#phrase').append(`
                <div class="space-slot"></div>
            `);
        }
        else {
            $('#phrase').append(`
                <div class="letter-slot"></div>
            `);
        }
    }

    $('#guessForm').on('submit', onGuess);
}

function renderPhrase() {
    let isSolved = true;

    // Render the phrase
    $('#phrase').empty();
    for (let letter of secretPhrase) {
        let isGuessed = doesContainLetter(guessedLetters, letter);

        if (!isGuessed && letter !== ' ') {
            isSolved = false;
        }

        if (letter === ' ') {
            $('#phrase').append(`
                <div class="space-slot"></div>
            `);
        }
        else if (isGuessed) {
            $('#phrase').append(`
                <div class="letter-slot">${letter}</div>
            `);
        }
        else {
            $('#phrase').append(`
                <div class="letter-slot"></div>
            `);
        }
    }

    // Render the hangman
    let parts = [
        'face',
        'torso',
        'arm-right',
        'arm-left',
        'leg-right',
        'leg-left'
    ];
    // count incorrect guesses
    let incorrectCount = 0;
    $('#hangman').empty();
    for (let guess of guessedLetters) {
        if (!doesContainLetter(secretPhrase, guess)) {
            incorrectCount++
            let part = parts[incorrectCount - 1];
            $('#hangman').append(`
                <div id="${part}"></div>
            `); 
        }   
    }


    if (incorrectCount >= parts.length) {
        // delay, so it doesn't block DOM updates
        setTimeout(() => alert('yer ded 💀'), 0);
        return;
    }

    if (isSolved) {
        setTimeout(() => alert('You won!'), 0);
    }
}

function doesContainLetter(letterList, targetLetter) {
    for (let letter of letterList) {
        if (letter.toLowerCase() === targetLetter.toLowerCase()) {
            return true;
        }
    }

    return false;
}

function onGuess(evt) {
    evt.preventDefault();

    let guess = $('#guessInput').val();
    guessedLetters.push(guess);

    $('#guessInput').val('');
    $('#guessInput').focus();

    renderPhrase();
}


