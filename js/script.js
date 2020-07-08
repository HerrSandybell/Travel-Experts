const navBar = document.querySelector(`nav`)
const burgerBtn = document.querySelector(`.hamburger-menu`);

// When burger button is clicked, change its color and slide in the nav bar.
burgerBtn.addEventListener("click", function(){
    navBar.classList.toggle('visible');
    burgerBtn.classList.toggle('toggled');
})

// GALLERY CODE //
const imgList = [10, 100, 1000, 101, 1011, 1015, 1023, 1029, 1036, 1037, 1040, 1039, 1043, 1044, 1045, 1050, 1057, 1061, 108, 11, 116, 122, 13, 128, 136, 142, 15, 164];

let galleryTemplate = '';

for (i=0; i < imgList.length; i++) {
  galleryTemplate += `<img src='https://picsum.photos/id/${imgList[i]}/250/250'>`;
}

document.querySelector('.gallery').innerHTML = galleryTemplate;

// END GALLERY CODE //

//