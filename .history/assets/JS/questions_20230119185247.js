//@ts-check

let time = 60
let timer
let timerel = document.querySelector("#timer")

function startTimer() {
    timer = setInterval(function () {
        if (time > 0) {
            time -= 1
            timerel.textContent = `${time}`
        } else {
            clearInterval(timer) //Calculate score and pass it to the score page
        }
    }, 1000)

}

startTimer()

let questionIndex = 0
const questions = [
    {
        question: "What are the symbols used to indicate an array of objects?",
        choices: ["[]", "{}", "()", "<>"],
        answer: "1"
    },
    {
        question: "This is a question 2",
        choices: ["1", "2", "3", "4"],
        answer: "2"
    },
    {
        question: "This is a question 3",
        choices: ["1", "2", "3", "4"],
        answer: "4"
    },
    {
        question: "This is a question 4",
        choices: ["1", "2", "3", "4"],
        answer: "3"
    }
]

const questionEl = document.querySelector("h2")
const answerContainer = document.querySelector("#questions")
const answerButtons = answerContainer.children

answerContainer.addEventListener("click", checkAnswer)

function checkAnswer(event, questions) { //Two conditionals to check the answer
    if (event.target.tagName == "BUTTON") {
     const buttonText = event.target.textContent
     const correctAnswer = questions[answer]
    console.log(correctAnswer)
    } else {
        return
    }
    checkAnswer()
// function checkAnswer(event) { //Two conditionals to check the answer
//    if (event.target.tagName == "BUTTON") {
//     const buttonText = event.target.textContent
//     const correctAnswer = 
//     // console.log(questions[0])
//    }
   
   // Store text content of clicked button in variable
   // Compair users answer with correct answer
   // If correct
   //   -Add 5 to the timer
   //   -Add 1 to question index 
   //   -If questionIndex <= questions.length -1
   //       displayQuestion(questions[questionIndex])
   //   Else
   //       clearInterval(timer)
   //       Navigate to scorepage(pass time variable as query parameter)
   // If Incorrect (else) 
   //   -Subtract 5 from timer
   //   -Add 1 to question index
   //   -If questionIndex <= questions.length -1
   //       displayQuestion(questions[questionIndex])
   //   Else
   //       clearInterval(timer)
   //       Navigate to scorepage(pass time variable as query parameter)
   
    
   //    console.log(event)
    // if (questionIndex <= questions.length -1) {
    //     
    //     return
    // } else {
    //     questionIndex++
    //     time -= 10
    //     displayQuestion()
    // }
}

function displayQuestion(question) {
    questionEl.textContent = question.question
    question.choices.forEach((choice, idx) => {
        answerButtons[idx].textContent = choice
    })
}
displayQuestion(questions[questionIndex])