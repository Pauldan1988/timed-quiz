//@ts-check

let time = 60
let timer
let timerel = document.querySelector("#timer")





function startTimer() {
    timer = setInterval(function () {
        if (time > 0) {
            time -= 1
            //@ts-ignore
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
        answer: "[]"
    },
    {
        question: "When is it necessary to use the var keyword",
        choices: ["To declare a constant.", "To create an instruction.", "To declare a variable.", "None of the above."],
        answer: "To declare a variable."
    },
    {
        question: "Usually JavaScript line(s) end with",
        choices: ["Semicolon", "Colon", "Comma", "Forwardslash"],
        answer: "Semicolon"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<Javascript>", "<script>", "<Java>", "<scripting>"],
        answer: "<script>"
    }
]

const questionEl = document.querySelector("h2")
const answerContainer = document.querySelector("#questions")
// @ts-ignore
const answerButtons = answerContainer.children
// @ts-ignore
answerContainer.addEventListener("click", checkAnswer)

function checkAnswer(event) { //Two conditionals to check the answer
    if (event.target.tagName == "BUTTON") {
     const userAnswer = event.target.textContent
     const correctAnswer = questions[questionIndex].answer
     if (userAnswer === correctAnswer) {
        time += 5
        questionIndex++
     } else {
        time -= 10
        questionIndex++
     } 
     if (questionIndex <= questions.length -1) {
        displayQuestion(questions[questionIndex])
     } else {
        clearInterval(timer)
        window.location.href = `/scorepage.html?score=${time}`

     }
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
    // @ts-ignore
    questionEl.textContent = question.question
    question.choices.forEach((choice, idx) => {
        answerButtons[idx].textContent = choice
    })
}
displayQuestion(questions[questionIndex])









// document.querySelector("#Start").addEventListener("click", function(){
//     document.querySelector("#quizlet").style.display = "none"
//     displayQuestion()
//     startTimer()
// })

// body.appendChild(headerEl)
// body.appendChild(h1El)
// headerEl.setAttribute("style", "margin:auto; background-color: black; width:auto; height: 5rem; display:flex;")
// h1El.setAttribute("style", "margin:auto; display:flex; justify-content:center; font-size:50px")

// h1El.textContent = "JavaQuiz!"

// function header() {

// }