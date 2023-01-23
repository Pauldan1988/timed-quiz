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
        question: "This is a question",
        choices: ["1", "2", "3", "4"],
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

function checkAnswer(event) { //Two conditionals to check the answer
   if (event.target.tagName == "BUTTON") {
    
    console.log(event)
   }
   // Store text content of clicked button in variable
   // Compair users answer with correct answer
   // If correct
   //   -Add 5 to the timer
   //   -Add 1 to question index 
   //   -If questionIndex <= questions.length -1
   //       displayQuestion(questions[questionIndex])
   //   Else
   //       clearInterval(timer)
   //       Navigate to scorepage(pass time variable as qwery parameter)
   // If Incorrect (else) 
   //   -Subtract 5 from timer
   //   -Add 1 to question I
   









   //    console.log(event)
    // if (questionIndex === questions.length - 1) {
    //     clearInterval(timer)
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
displayQuestion(questions[0])

//check what checkAnswer.target is
//Extract text content of button and store it in a variable
//Compair with correct answer of current/displayed question
//Using an if else statement to check if the user gets a correct/incorrect answer.
//What behavior the timer will exhibitIf it will increment or decriment