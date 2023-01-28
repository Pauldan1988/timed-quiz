@ts-check
// const button = document.getElementById("goToHs")
let quizStart = document.querySelector("#start")
//@ts-ignore
quizStart.addEventListener("click", beginQuiz)
//@ts-ignore
button.addEventListener("click", () => {
   location.href = '/questions.html'
})


// function beginQuiz() {
//    location.href = `/scorepage.html`
// }
