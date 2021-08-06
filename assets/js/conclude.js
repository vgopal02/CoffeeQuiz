//jshint esversion :6

//Register user final score with option to save
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// This is the final score for the current round displayed which user may save
finalScore.innerText = mostRecentScore;

//Save button disabled until user adds text to the input field
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

  // Save high score variable
  let saveHighScore;
saveHighScore = (e) => {
    e.preventDefault();

//Maximum of 5 high scores can be stored in order of highest to lower scores
    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

//Score is saved to highscores.html and user returned to home page
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('index.html');
};