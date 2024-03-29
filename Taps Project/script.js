const taps = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");

taps.addEventListener("click", (event) => {
    const id = event.target.dataset.id;
console.log('id');
    if (id) {
        btns.forEach((btn) => {
            btn.classList.remove("live");
        })
        event.target.classList.add("live");
        articles.forEach((article) => {
            article.classList.remove("live")
        });
        const element = document.getElementById(id);
        element.classList.add("live")
    }
})
