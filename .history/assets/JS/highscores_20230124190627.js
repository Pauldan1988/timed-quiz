//@ts-check
const highScoreStart = document.querySelector("#header")
//@ts-ignore
highScoreStart.addEventListener("click",quizHighScore)

function quizHighScore() {
    location.href = `/questions.html`
}