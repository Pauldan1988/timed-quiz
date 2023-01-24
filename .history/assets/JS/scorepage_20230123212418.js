let scoreParams = new URLSearchParams(document.location.search)
let quizScore = scoreParams.get("score")

const scoreDisplay = document.getElementById("score")

function 
scoreDisplay.textContent = quizScore

// console.log(quizScore)
