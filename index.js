const openBurgerEl = document.querySelector('.header__burger');
const menuNavEl = document.querySelector('.header');


openBurgerEl.onclick = function () {
    menuNavEl.classList.toggle('header--open');
}

window.onscroll = function(){
        
    if(window.scrollY > 100){
        menuNavEl.style.background = "#222222";
    }
    else{
        menuNavEl.style.background = "rgba(0, 0, 0, 0)"; 
    }
        }