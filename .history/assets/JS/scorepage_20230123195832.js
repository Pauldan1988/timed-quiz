let scoreParams = new URLSearchParams(document.location.search)
let quizScore = scoreParams.get("score")

 scoreDisplay = document.getElementById("score")
scoreDisplay.textContent = quizScore

// console.log(quizScore)