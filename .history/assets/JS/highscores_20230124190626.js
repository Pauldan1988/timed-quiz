//@ts-check
const highScoreStart = document.querySelector("#header")
//@
highScoreStart.addEventListener("click",quizHighScore)

function quizHighScore() {
    location.href = `/questions.html`
}