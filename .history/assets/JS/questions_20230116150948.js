//@ts-check

let time = 60
let timer


function startTimer() {
    timer = setInterval(function(){
        if(time > 0){
            time -=1
            document.querySelector("#timer").innerText = time
        } else {
            clearInterval(timer) //Calculate score and pass it to the scvore page
        }
    },1000)
    
}

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
    document.querySelector("#questions").innerText = questions[questionIndex].question
    document.querySelector("#q1").innerText = questions[questionIndex].choices[0]
    document.querySelector("#q2").innerText = questions[questionIndex].choices[1]
    document.querySelector("#q3").innerText = questions[questionIndex].choices[2]
    document.querySelector("#q4").innerText = questions[questionIndex].choices[3]
}