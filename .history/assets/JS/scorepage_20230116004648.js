function checkAnswer(event) {
    if(questionIndex === questions.length -1){
        clearInterval(timer)
        return
    }
    const userChoice = event.target.innerText
 const correctChoice = questions[questionIndex].answer
 if(userChoice === correctChoice){
    questionIndex ++
    displayQuestion()
 } else {
    questionIndex ++
    time -= 10
    displayQuestion()
 }
}
document.querySelector("#q1").addEventListener("click", checkAnswer)
document.querySelector("#q2").addEventListener("click", checkAnswer)
document.querySelector("#q3").addEventListener("click", checkAnswer)
document.querySelector("#q4").addEventListener("click", checkAnswer)