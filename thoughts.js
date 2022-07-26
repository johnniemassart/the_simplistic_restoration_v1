// CURSOR
const mycursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
    mycursor.style.left = e.clientX + 'px';
    mycursor.style.top = e.clientY + 'px';
});


// THOUGHTS OPENING AND CLOSE BLOG POSTS 
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');

let thoughtsBox = document.querySelector('.thoughts-box');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});

function openModal(modal) {
    if (modal === null) {
        return;
        // thoughtsBox.style.overflow = 'auto';
    } else {
        modal.classList.add('active');
        // window.scrollTo(0, 0);
        // thoughtsBox.style.overflow = 'hidden';
    }
}

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});

function closeModal(modal) {
    if (modal === null) {
        return;
    } else {
        modal.classList.remove('active');
        // thoughtsBox.style.overflow = 'auto';
    }
}


// FILTERED LIST - 
var textInput = document.getElementById('text-input');

textInput.addEventListener('keyup', filterBlog);

function filterBlog() {
    var inputValue = document.getElementById('text-input').value.toLowerCase();
    var blogName = document.querySelectorAll('.open-button');

    for(var iterate=0; iterate < blogName.length; iterate++) {
        var a = blogName[iterate].innerText;
        if(a.toLowerCase().indexOf(inputValue) > -1){
            blogName[iterate].style.display = '';
        } else {
            blogName[iterate].style.display = 'none';
        }
    }
}
