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

//note
const btnOpen = document.querySelector('.notification');

btnOpen.addEventListener('click', ()=>{
    let modalNote = basicLightbox.create(`<div class="modal-note"><div class="note"><p>love u</p></div><button class="paw-btn"><img src="/img/paw.svg" alt="paw" width="200" height="200"></button></div>`)
    modalNote.show();
    let modalWin = modalNote.element(); 

    const btnClose = modalWin.querySelector('.paw-btn');
    btnClose.addEventListener('click', ()=>{
        modalNote.close();
    });
});

