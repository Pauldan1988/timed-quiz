let scoreParams = new URLSearchParams(document.location.search)
let quizScore = scoreParams.get("score")
console.log(quizScore)
console.log