//@ts-check
const button = document.getElementById
let quizStart = document.querySelector("#start")
//@ts-ignore
quizStart.addEventListener("click", beginQuiz)

function beginQuiz() {
   location.href = `/questions.html`
}
