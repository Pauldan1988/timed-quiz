//@ts-check
const button = document.getElementById("goToHs")
let quizStart = document.querySelector("#start")
//@ts-ignore
quizStart.addEventListener("click", beginQuiz)

button?.addEventListener("click", () )


function beginQuiz() {
   location.href = `/questions.html`
}
