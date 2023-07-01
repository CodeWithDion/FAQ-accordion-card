const questionsEl = document.querySelectorAll(".question");

questionsEl.forEach((question) => {
    question.addEventListener("click", () => {
        question.classList.toggle("active")
    })
})