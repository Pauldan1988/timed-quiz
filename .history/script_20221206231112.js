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
    scoreHeader.textContent = ""


}