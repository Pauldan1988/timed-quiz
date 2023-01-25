let scoreParams = new URLSearchParams(document.location.search)
let quizScore = scoreParams.get("score")

const scoreDisplay = document.getElementById("score")


scoreDisplay.textContent = quizScore

if (window.addEventListener) {
    window.addEventListener("storage", handle_storage, false);
  } else {
    window.attachEvent("onstorage", handle_storage);
  };

  function handle_storage(e) {
    if (!e) { e = window.event; }
  }

  



// console.log(quizScore)
