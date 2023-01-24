//@ts-check
let quizStart = document.querySelector("#start")
//@
quizStart.addEventListener("click", beginQuiz)

function beginQuiz() {
    location.href = `/questions.html${quizStart}`
}


console.log(quizStart)