const autoSlider = document.querySelectorAll(".circle");
const slide = document.querySelector(".slides");
const slide0 = document.querySelector(".slide");
const circle = document.querySelectorAll(".circle");

circle.forEach((elem, index)=>{
    elem.addEventListener("click", ()=>{
        move(index);
        counter = index;
    })
})

let counter = 1;
autoSlider[0].style.background = "#00C9C9";
function move(e){
    switch(e){
        case 0: 
            slide.style.transform = "translateX(0%)"; break;
        case 1: 
            slide.style.transform = "translateX(-33%)"; break;
        case 2: 
            slide.style.transform = "translateX(-66%)";             
            break;

        

    }
}
setInterval(()=>{
    autoSlider.forEach(elem=>{
        elem.style.background = "none";
    })    
    autoSlider.forEach((elem,index)=>{
        if(counter === index)
        elem.style.background = "#00C9C9";
    })    
    move(counter);
    counter++;
    if(counter > 2){
        counter = 0;
    }
    
}, 5000);
