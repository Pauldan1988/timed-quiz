//@ts-check
const button = document.getElementById("goToHs")
let quizStart = document.querySelector("#start")
//@ts-ignore
quizStart.addEventListener("click", beginQuiz)

function beginQuiz() {
   location.href = `/questions.html`
}
//@ts-ignore
button.addEventListener("click", () => {
   location.href = '/'
})





















// //@ts-check

// let quizStart = document.querySelector("#start")
// //@ts-ignore
// quizStart.addEventListener("click", beginQuiz)
// //@ts-ignore



// // function beginQuiz() {
// //    location.href = `/scorepage.html`
// // }
