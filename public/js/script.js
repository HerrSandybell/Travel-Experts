// Written by Tarek Alatrach on July 12th, 2020 for the SAIT Software development CPRG210 course.

const navBar = document.querySelector(`nav`)
const burgerBtn = document.querySelector(`.hamburger-menu`);

// When burger button is clicked, change its color and slide in the nav bar.
burgerBtn.addEventListener("click", function(){
    navBar.classList.toggle('visible');
    burgerBtn.classList.toggle('toggled');
})

document.querySelector('main').addEventListener("click", function(){
  navBar.classList.remove('visible');
})