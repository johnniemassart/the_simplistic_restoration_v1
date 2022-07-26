// CURSOR
const mycursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
    mycursor.style.left = e.clientX + 'px';
    mycursor.style.top = e.clientY + 'px';
});