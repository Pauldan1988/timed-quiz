let scoreParams = new URLSearchParams(document.location.search)
let quizScore = scoreParams.get("score")

const scoreDisplay = document.getElementById("score")


scoreDisplay.textContent = quizScore


const form = document.querySelector("#form")
const input = document.getElementById("initials")
const params = new URLSearchParams(location.search)
const hsList = document.getElementById("scores")

image.png



const button = document.getElementById("goToHs")

button.addEventListener("click", () => {
    location.href "highscore.html"
})

// console.log(quizScore)
