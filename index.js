const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Открываем сайт в браузере
window.onload = function() {
    wrapper.style.display = "flex";
}

// Добавляем обработчик события клика на кнопку "Да"
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Я тоже тебя люблю!";
    gif.src = "https://media.giphy.com/media/h4CBOqiYiKBWHLmJSw/giphy.gif";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

// Добавляем обработчик события наведения курсора на кнопку "Нет"
noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
