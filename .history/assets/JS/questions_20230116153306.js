//@ts-check

let time = 60
let timer
let timerel = document.querySelector("#timer")

function startTimer() {
    timer = setInterval(function(){
        if(time > 0){
            time -=1
            timerel.textContent = `${time}`
        } else {
            clearInterval(timer) //Calculate score and pass it to the score page
        }
    },1000)
    
}

startTimer()

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

const questionEl = document.querySelector("#questions")
document.querySelector("#q1").innerText = questions[questionIndex].choices[0]
document.querySelector("#q2").innerText = questions[questionIndex].choices[1]
document.querySelector("#q3").innerText = questions[questionIndex].choices[2]
document.querySelector("#q4").innerText = questions[questionIndex].choices[3]

function displayQuestion() {

}