// CURSOR
const mycursor = document.querySelector('.cursor');
window.addEventListener('mousemove', (e) => {
    mycursor.style.left = e.clientX + 'px';
    mycursor.style.top = e.clientY + 'px';
});

// CHANGE CURSOR IN/OUT OF IMG
const imgContained = document.querySelector('.img-inner');
imgContained.addEventListener('mouseenter', () => {
    mycursor.style.background = 'whitesmoke';
});

imgContained.addEventListener('mouseleave', () => {
    mycursor.style.background = 'rgb(32,32,32)';
});


// CONTENT INSIDE IMAGE DISPLAYS ONCLICK
const textContained = document.querySelector('.text-contained');

textContained.addEventListener('click', () => {
    textContained.classList.toggle('textContainedOpacity');
});