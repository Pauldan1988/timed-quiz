//@ts-check
const button = document.getElementById("goToHs")

//@ts-ignore
quizStart.addEventListener("click", beginQuiz)

function beginQuiz() {
   location.href = `/questions.html`
}
//@ts-ignore
button.addEventListener("click", () => {
   location.href = '/scorepage.html'
})





















// //@ts-check

// let quizStart = document.querySelector("#start")
// //@ts-ignore
// quizStart.addEventListener("click", beginQuiz)
// //@ts-ignore



// // function beginQuiz() {
// //    location.href = `/scorepage.html`
// // }
