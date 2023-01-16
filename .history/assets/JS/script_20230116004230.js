//@ts-check

let time = 60
let timer



const questions = [
    {
        question:"This is a question",
        choices: ["1","2","3","4"],
        answer: "1"
    },
    {
        question:"This is a question 2",
        choices: ["1","2","3","4"],
        answer: "2"
    },
    {
        question:"This is a question 3",
        choices: ["1","2","3","4"],
        answer: "4"
    },    
    {
        question:"This is a question 4",
        choices: ["1","2","3","4"],
        answer: "3"
    }let questionIndex = 0
]


function displayQuestion() {
    document.querySelector("#questiontext").innerText = questions[questionIndex].question
    document.querySelector("#q1").innerText = questions[questionIndex].choices[0]
    document.querySelector("#q2").innerText = questions[questionIndex].choices[1]
    document.querySelector("#q3").innerText = questions[questionIndex].choices[2]
    document.querySelector("#q4").innerText = questions[questionIndex].choices[3]
}



function startTimer() {
    timer = setInterval(function(){
        if(time > 0){
            time -=1
            document.querySelector("#timer").innerText = time
        }
    },1000)
}



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

document.querySelector("#Start").addEventListener("click", function(){
    document.querySelector("#quizlet").style.display = "none"
    displayQuestion()
    startTimer()
})

body.appendChild(headerEl)
body.appendChild(h1El)
headerEl.setAttribute("style", "margin:auto; background-color: black; width:auto; height: 5rem; display:flex;")
h1El.setAttribute("style", "margin:auto; display:flex; justify-content:center; font-size:50px")

h1El.textContent = "JavaQuiz!"

function header() {

}