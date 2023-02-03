let scoreParams = new URLSearchParams(document.location.search)
let quizScore = scoreParams.get("score")
const input = document.getElementById("initials")
const scoreDisplay = document.getElementById("score")
const params = new URLSearchParams(location.search)
const hsList = document.getElementById("scores")

scoreDisplay.textContent = quizScore

const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const initials = input.value 
    const score = params.get("score")
    
    localStorage.setItem(initials, score)
    console.log(score)
})


// document.getElementById("formdiv").addEventListener("click", () => {
    const keys = Object.keys(localStorage)
    keys.forEach(key => {
        const liEl = document.createElement("li")
        const score = localStorage.getItem(key)
        liEl.textContent = `${key}: ${score}`
        hsList.append(liEl)
    })
// })

if (!params.get("score")) {
    form.classList.add("hidden")
}











// ​
// ​








// console.log(quizScore)
