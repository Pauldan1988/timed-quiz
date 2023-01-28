let scoreParams = new URLSearchParams(document.location.search)
let quizScore = scoreParams.get("score")

const scoreDisplay = document.getElementById("score")



const form = document.querySelector('form')

form.addEventListener('name', (e) => {
    e.preventDefault()

    const initials = input.value 
    const score = params.get('score')
    
    localStorage.setItem(initials, score)
})


document.getElementById('showLocal').addEventListener('click', () => {
    const keys = Object.keys(localStorage)
    keys.forEach(key => {
        const liEl = document.createElement('li')
        const score = localStorage.getItem(key)
        liEl.textContent = `${key}: ${score}`
        hsList.append(liEl)
    })
})

if (!params.get('score')) {
    form.classList.add('hidden')
}









// const input = document.getElementById('initials')
// const params = new URLSearchParams(location.search)
// const hsList = document.getElementById('scores')
// ​
// ​








// console.log(quizScore)
