let scoreParams = new URLSearchParams(document.location.search)
let quizScore = scoreParams.get("score")

const scoreDisplay = document.getElementById("score")


scoreDisplay.textContent = quizScore


const form = document.querySelector("form")


// console.log(quizScore)
