//@ts-check
let quizStart = document.querySelector("#start")
//@ts-ignore
quizStart.addEventListener("click", beginQuiz)

function beginQuiz() {
    location.href = `/questions.html`
}


console.log(quizStart)