const body = document.body;
const headerEl = document.createElement("header");
const h1El = document.createElement("h1");
const paraEl = document.createElement("p");
const startQuizEl = document.createElement("div");
const scoresEl = document.createElement("div");
let time = 60
let timer
let questionIndex = 0
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
    }
]


function displayQuestion() {
    document.querySelector("#questiontext").innerText = questions[questionIndex].question
    document.querySelector("#q1").innerText = questions[questionIndex].choices[0]
    document.querySelector("#q2").innerText = questions[questionIndex].choices[1]
    document.querySelector("#q3").innerText = questions[questionIndex].choices[2]
    document.querySelector("#q4").innerText = questions[questionIndex].choices[3]
}
displayQuestion()


function startTimer() {
    timer = setInterval(function(){
        if(time > 0){
            time -=1
            document.querySelector("#timer").innerText = time
        }
    },1000)
}
startTimer()


function checkAnswer(event) {
 
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





body.appendChild(headerEl)
body.appendChild(h1El)
headerEl.setAttribute("style", "margin:auto; background-color: black; width:auto; height: 5rem; display:flex;")
h1El.setAttribute("style", "margin:auto; display:flex; justify-content:center; font-size:50px")

h1El.textContent = "JavaQuiz!"

function header() {

}






























// const containerE1 = document.getElementById("quizlet")

// function dashboard() {
//     const dashContainer = document.createElement("div")

//     const dashHeader = document.createElement("header")
//     dashHeader.textContent = "Quizlet"
//     // dashHeader.classList.add("")
//     const logoh1 = document.createElement("h1")
//     logoh1.textContent = "QZ"
//     // logoh1.classList.add("")
//     const dashButton = document.createElement("button")
//     dashButton.textContent = "Scores"
//     dashButton.addEventListener("click", function () {
    
//     })
//     dashHeader.appendChild(logoh1)
//     dashHeader.appendChild(dashButton)
//     dashContainer.appendChild(dashHeader)
//     return dashContainer
// }

// dashboard()

// function scoreSheet() {
//     const scoreDiv = document.createElement = createElement("div")

//     const scoreHeader = document.createElement = createElement("header")
//     scoreHeader.textContent = "Congratulations! Your score is"
//     // scoreHeader.classList.add("")
//     // const scoreHeader


// }8q