//@ts-check
let quizStart = document.querySelector("#start")

quizStart?.addEventListener("click")
window.location.href = `/index.html?index=${quizStart}`

console.log(quizStart)