const modalDiv = document.querySelector('.modal-welcome');
const closeBtn = document.querySelector('.heart-btn');

closeBtn.addEventListener('click', ()=>{
    modalDiv.classList.add('isclosed');
});


const modalNote = document.querySelector('.modal-note');
const btnOpen = document.querySelector('.notification');
const btnClose = document.querySelector('.paw-btn');

btnOpen.addEventListener('click', ()=>{
    modalNote.classList.add('is-open');
});

btnClose.addEventListener('click', ()=>{
    modalNote.classList.remove('is-open');
});