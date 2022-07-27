// CURSOR
const mycursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
    mycursor.style.left = e.clientX + 'px';
    mycursor.style.top = e.clientY + 'px';
});

// IMAGE SLIDER
var i = 0;
var images = [];
var time = 275;

images[0] = 'images/nyc-streets-j.jpeg';
images[1] = 'images/johnnie_texas.jpeg';
images[2] = 'images/image-board.jpeg';
images[3] = 'images/palm-trees.jpeg';
images[4] = 'images/nyc-stairs.jpeg';


function changeImg() {
    // document.slide.src = images[i];
    document.querySelector('.loader-images').src = images[i];


    if (i < images.length - 1) {
        i++;
    } /* else {
       i = 0; 
    } */

    setTimeout("changeImg()", time);

}

// setTimeout("changeImg()", 500);   
window.onload = setTimeout("changeImg()", 500);

// LOADER PAGE TRANSITION TO HOME PAGE
const loader = document.querySelector('.div-container');
const container = document.querySelector('.container');

function loadit() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';
        container.style.display = 'grid';
    }, 1800);
}

// loadit();
window.onload = loadit();

// HOME IMG DISPLAY
const homeImgContainer = document.getElementById('homeImg');
var homeImgs = [];

homeImgs[0] = 'images/pmoa.jpeg';
homeImgs[1] = 'images/johnnie_cali.jpeg';
homeImgs[2] = 'images/colony_palms.png';


function homeImgDisplay() {
    for(var count=0; count < homeImgs.length; count++) {
        const newImage = document.createElement('img');
        newImage.src = homeImgs[count];
        homeImgContainer.appendChild(newImage);
    } 
}

/* homeImgDisplay();
homeImgDisplay();
homeImgDisplay();
homeImgDisplay();
homeImgDisplay(); */


document.addEventListener('DOMContentLoaded', () => {
    const smallWindowSize = window.matchMedia('(min-width: 356px)');
    const mediumWindowSize = window.matchMedia('(min-width: 367px)');
    const largeWindowSize = window.matchMedia('(min-width: 387px)');
    const xlWindowSize = window.matchMedia('(min-width: 424px)');
    const xxlWindowSize = window.matchMedia('(min-width: 690px)');
    if (xxlWindowSize.matches) {
        homeImgDisplay();
        homeImgDisplay();
    } else if (xlWindowSize.matches) {
        homeImgDisplay();
        homeImgDisplay();
        homeImgDisplay();
    } else if (largeWindowSize.matches) {
        homeImgDisplay();
        homeImgDisplay();
        homeImgDisplay();
        homeImgDisplay();
    } else if (mediumWindowSize.matches) {
        homeImgDisplay();
        homeImgDisplay();
        homeImgDisplay();
        homeImgDisplay();
        homeImgDisplay();
    } else if (smallWindowSize.matches) {
        homeImgDisplay();
        homeImgDisplay();
        homeImgDisplay();
        homeImgDisplay();
        homeImgDisplay();
        homeImgDisplay();
    } else if (smallWindowSize > 355) {
        return;
    }
});

