const modalDiv = document.querySelector('.modal-welcome');
const closeBtn = document.querySelector('.heart-btn');

const hasSeenModal = sessionStorage.getItem('hasSeenModal');

if (hasSeenModal) {
  modalDiv.classList.add('isclosed'); // не показуємо
} 

closeBtn.addEventListener('click', ()=>{
    modalDiv.classList.add('isclosed');
    sessionStorage.setItem('hasSeenModal', 'true');
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