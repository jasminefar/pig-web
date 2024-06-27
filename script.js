let scores, currentScore, activePlayer, gamePlaying;

init();

document.getElementById('roll-dice').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random number
        let dice = Math.floor(Math.random() * 6) + 1;

        // 2. Display the result
        let diceDOM = document.getElementById('dice-img');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // 3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            // Add score
            currentScore += dice;
            document.getElementById('current-score').textContent = 'Current Score: ' + currentScore;
        } else {
            // Next player
            nextPlayer();
        }
    }    
});

document.getElementById('hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += currentScore;

        // Update the UI
        document.getElementById('score-' + (activePlayer + 1)).textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= 100) {
            document.getElementById('score-' + (activePlayer + 1)).textContent = 'Winner!';
            gamePlaying = false;
        } else {
            // Next player
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    currentScore = 0;
    document.getElementById('current-score').textContent = 'Current Score: ' + currentScore;

    document.getElementById('dice-img').style.display = 'none';
}

function init() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('score-1').textContent = '0';
    document.getElementById('score-2').textContent = '0';
    document.getElementById('current-score').textContent = 'Current Score: 0';

    document.getElementById('dice-img').style.display = 'none';
}
