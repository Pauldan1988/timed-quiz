const body = document.body;
const headerEl = document.createElement("header");
const h1El = document.createElement("h1");
const paraEl = document.createElement("p");
const startQuizEl = document.createElement("div");
const scoresEl = document.createElement("div");
let time = 60
let timer




body.appendChild(headerEl)
body.appendChild(h1El)





headerEl.setAttribute("style", "margin:auto; background-color: black; width:auto; height: 5rem; display:flex;")
h1El.setAttribute("style", "margin:auto; display:flex; justify-content:center; font-size:50px")

h1El.textContent = "JavaQuiz!"

function header() {

}



function startTimer() {
    timer = setInterval(function(){
        if()
    })
}












































const containerE1 = document.getElementById("quizlet")

function dashboard() {
    const dashContainer = document.createElement("div")

    const dashHeader = document.createElement("header")
    dashHeader.textContent = "Quizlet"
    // dashHeader.classList.add("")
    const logoh1 = document.createElement("h1")
    logoh1.textContent = "QZ"
    // logoh1.classList.add("")
    const dashButton = document.createElement("button")
    dashButton.textContent = "Scores"
    dashButton.addEventListener("click", function () {
    
    })
    dashHeader.appendChild(logoh1)
    dashHeader.appendChild(dashButton)
    dashContainer.appendChild(dashHeader)
    return dashContainer
}

dashboard()

function scoreSheet() {
    const scoreDiv = document.createElement = createElement("div")

    const scoreHeader = document.createElement = createElement("header")
    scoreHeader.textContent = "Congratulations! Your score is"
    // scoreHeader.classList.add("")
    // const scoreHeader


}