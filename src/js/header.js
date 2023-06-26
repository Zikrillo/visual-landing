const header =  document.querySelector(".header__navigation");
const header1 =  document.querySelector(".header__information");
const headerRow =  document.querySelector(".header__navigation-row");

const production = document.getElementById("production");
const services = document.getElementById("services");
const about = document.getElementById("about");
const news = document.getElementById("news");
const partners = document.getElementById("partners");
const navItem = document.querySelectorAll(".header__navigation-item");
const footer = document.querySelector(".footer");
const burger = document.querySelector(".burger");


function isElementVisible(element) {
    var rect = element.getBoundingClientRect();
    return rect.top <= 200;
}

document.onscroll = ()=>{

    if(isElementVisible(production)){
        headerRow.innerHTML = ` 
        <li class="header__navigation-item"><a href="/">МАГАЗИН</a></li>
        <li class="header__navigation-item"><a href="#about"> О КОМПАНИИ</a></li>
        <li class="header__navigation-item active"><a href="#production"> ПРОДУКЦИЯ</a></li>
        <li class="header__navigation-item"><a href="#services">УСЛУГИ</a></li>
        <li class="header__navigation-item"><a href="#news">АКЦИИ И НОВОСТИ</a></li>
        <li class="header__navigation-item"><a href="#footer">ОБРАТНАЯ СВЯЗЬ</a></li>`;
    }
    if(isElementVisible(services)){
        headerRow.innerHTML = ` 
        <li class="header__navigation-item"><a href="/">МАГАЗИН</a></li>
        <li class="header__navigation-item"><a href="#about"> О КОМПАНИИ</a></li>
        <li class="header__navigation-item"><a href="#production"> ПРОДУКЦИЯ</a></li>
        <li class="header__navigation-item active"><a href="#services">УСЛУГИ</a></li>
        <li class="header__navigation-item"><a href="#news">АКЦИИ И НОВОСТИ</a></li>
        <li class="header__navigation-item"><a href="#footer">ОБРАТНАЯ СВЯЗЬ</a></li>`;
    }
    if(isElementVisible(about)){
        headerRow.innerHTML = ` 
        <li class="header__navigation-item"><a href="/">МАГАЗИН</a></li>
        <li class="header__navigation-item active"><a href="#about"> О КОМПАНИИ</a></li>
        <li class="header__navigation-item"><a href="#production"> ПРОДУКЦИЯ</a></li>
        <li class="header__navigation-item "><a href="#services">УСЛУГИ</a></li>
        <li class="header__navigation-item"><a href="#news">АКЦИИ И НОВОСТИ</a></li>
        <li class="header__navigation-item"><a href="#footer">ОБРАТНАЯ СВЯЗЬ</a></li>`;
    }
    if(isElementVisible(news)){
        headerRow.innerHTML = ` 
        <li class="header__navigation-item"><a href="/">МАГАЗИН</a></li>
        <li class="header__navigation-item "><a href="#about"> О КОМПАНИИ</a></li>
        <li class="header__navigation-item"><a href="#production"> ПРОДУКЦИЯ</a></li>
        <li class="header__navigation-item "><a href="#services">УСЛУГИ</a></li>
        <li class="header__navigation-item active"><a href="#news">АКЦИИ И НОВОСТИ</a></li>
        <li class="header__navigation-item"><a href="#footer">ОБРАТНАЯ СВЯЗЬ</a></li>`;
    }
    if(isElementVisible(footer)){
        headerRow.innerHTML = ` 
        <li class="header__navigation-item"><a href="/">МАГАЗИН</a></li>
        <li class="header__navigation-item"><a href="#about"> О КОМПАНИИ</a></li>
        <li class="header__navigation-item"><a href="#production"> ПРОДУКЦИЯ</a></li>
        <li class="header__navigation-item"><a href="#services">УСЛУГИ</a></li>
        <li class="header__navigation-item"><a href="#news">АКЦИИ И НОВОСТИ</a></li>
        <li class="header__navigation-item active"><a href="#footer">ОБРАТНАЯ СВЯЗЬ</a></li>`;
    }
    // if(isElementVisible(production)){
    //     navItem[2].classList.remove("remove");
    // }


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

burger.addEventListener("click", ()=>{
    document.querySelector("header").classList.toggle("active-header");
})