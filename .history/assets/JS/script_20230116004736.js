//@ts-check

let time = 60
let timer


function startTimer() {
    timer = setInterval(function(){
        if(time > 0){
            time -=1
            document.querySelector("#timer").innerText = time
        }
    },1000)
}





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