const slides = document.querySelector(".button-slider__slides");
const slideArray = document.querySelectorAll(".button-slider__slide");
const left =  document.querySelectorAll(".left")[0];
const right =  document.querySelectorAll(".right")[0];

let maxData = -1 * (470) * (slideArray.length - 3);
if(document.body.clientWidth < 1360){
    maxData = -1 * (470) * (slideArray.length - 1);
}
let current = 0;
left.addEventListener("click", ()=>{
    if(current !== 0){
        current = current + 470;
        slides.style.transform = `translate(${current}px)`;

    }
})
right.addEventListener("click", ()=>{
    if(current !== maxData){
        current = current - 470;
        slides.style.transform = `translate(${current}px)`;

    }
})

