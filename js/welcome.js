const modalDiv = document.querySelector('.modal-welcome');
const closeBtn = document.querySelector('.heart-btn');

closeBtn.addEventListener('click', ()=>{
    modalDiv.classList.add('isclosed');
})