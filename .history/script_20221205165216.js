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
        console.log("Work bitch)
    })
    dashHeader.appendChild(logoh1)
    dashHeader.appendChild(dashButton)
    dashContainer.appendChild(dashHeader)
    containerE1.appendChild(dashContainer)
}

dashboard()