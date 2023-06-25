const header =  document.querySelector(".header__navigation");
const header1 =  document.querySelector(".header__information");
const headerRow =  document.querySelector(".header__navigation-row");

const production = document.getElementById("production");
const services = document.getElementById("services");
const about = document.getElementById("about");
const news = document.getElementById("news");
const partners = document.getElementById("partners");
const navItem = document.querySelectorAll(".header__navigation-item");;

function isElementVisible(element) {
    var rect = element.getBoundingClientRect();
    return rect.top <= 0;
}

document.onscroll = ()=>{
    if(header.getBoundingClientRect().y <= -90){
        header.classList.remove("wrapper");
        header.classList.add("fixed");
        headerRow.classList.add("wrapper");
        document.querySelector(".slider").style.marginTop = "142px";
    }
    if(header1.getBoundingClientRect().y === 50 ){
        header.classList.remove("fixed");
        header.classList.add("wrapper");
        headerRow.classList.remove("wrapper");
        document.querySelector(".slider").style.marginTop = "0px";
    }
    
}