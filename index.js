const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    const playGame = () => {
        const playerOptions = document.querySelectorAll('.option');
        const computerOptions = ['rock', 'paper', 'scissors'];
        const computerIconDiv = document.querySelector('.computer-icon');

        playerOptions.forEach(option => {
            option.addEventListener('click', function () {
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10 - moves}`;

                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];

                let computerIcon = '';
                if (computerChoice === 'rock') {
                    computerIcon = '✊';
                } else if (computerChoice === 'paper') {
                    computerIcon = '✋';
                } else if (computerChoice === 'scissors') {
                    computerIcon = '✌️';
                }
                computerIconDiv.innerHTML = computerIcon;

                winner(this.dataset.option, computerChoice);

                if (moves == 10) {
                    gameOver(playerOptions, movesLeft);
                }
            });
        });
    };

    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');

        if (player === computer) {
            result.textContent = 'Tie';
        } else if (player == 'rock') {
            if (computer == 'paper') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        } else if (player == 'scissors') {
            if (computer == 'rock') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        } else if (player == 'paper') {
            if (computer == 'scissors') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    };

    const gameOver = (playerOptions, movesLeft) => {
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        });

        chooseMove.innerText = 'Game Over!!';
        movesLeft.style.display = 'none';

        if (playerScore > computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game';
            result.style.color = '#308D46';
        } else if (playerScore < computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        } else {
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey';
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex';
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        });
    };

    playGame();
};

game();
