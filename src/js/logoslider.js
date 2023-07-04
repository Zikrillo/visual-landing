const slides1 = document.querySelector(".button-slider__slide_logo");
const slideArray1 = document.querySelectorAll(".button-slider__slide_logo-elem");
const left1 = document.querySelectorAll(".left")[1];
const right1 = document.querySelectorAll(".right")[1];
const avarage = Math.round(slideArray1.length / 2);

slides1.style.gridTemplateColumns = `repeat(${avarage},1fr)`;
slides1.style.gridTemplateRows = `repeat(2,1fr)`;

let max;
let currentValue = 0;

left1.addEventListener("click", () => {
    if (document.body.clientWidth > 1360) max = -(avarage - 4) * (38 + 275);
    if (document.body.clientWidth <= 1360) max = -(avarage - 1) * (38 + 275);

    if (currentValue !== 0) {
        currentValue = currentValue + 38 + 275;
        slides1.style.transform = `translateX(${currentValue}px)`;
    }
});
right1.addEventListener("click", () => {
    if (document.body.clientWidth > 1360) max = -(avarage - 4) * (38 + 275);
    if (document.body.clientWidth <= 1360) max = -(avarage - 1) * (38 + 275);

    if (currentValue !== max) {
        currentValue = currentValue - 38 - 275;
        slides1.style.transform = `translateX(${currentValue}px)`;
    }
});
