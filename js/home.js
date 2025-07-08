const modalDiv = document.querySelector('.modal-welcome');
const closeBtn = document.querySelector('.heart-btn');

const hasSeenModal = sessionStorage.getItem('hasSeenModal');

if (hasSeenModal) {
  modalDiv.classList.add('isclosed'); // не показуємо
} 

closeBtn.addEventListener('click', ()=>{
    modalDiv.classList.add('isclosed');
    sessionStorage.setItem('hasSeenModal', 'true');
 PNotify.alert({title:'Welcome, princess', text:'Just click one everything u see and enjoy ✿', icon: false, delay:5000, addClass:'alert home-alert'});
});

//note
const btnOpen = document.querySelector('.notification');

btnOpen.addEventListener('click', ()=>{
    let modalNote = basicLightbox.create(`<div class="modal-note"><div class="note">
        <p>So...Я знаю, ти давно вже зрозуміла, що моя love language - подарунки, тож ось тобі ще один в колекцію.
        Цей подарунок я зробила (не скажу, що без причини, адже ти і є причиною для подарунків), щоб в черговий раз показати тобі як я ціную тебе.
        Ми дружимо з 5 класу, тоді я була не дуже хорошою людиною...і я вдячна тобі, що витерпіла ту мене. З того часу я дуууже сильно змінилася як 
        людина і це завдяки тобі. Хоча знаєш, ти не просто змінила мене, ти зробила з мене, ту мене, якою я є зараз, і ти навіть не уявляєш наскільки сильно
        я вдячна тобі за це.<br>
        За ці роки ми стали настільки близькими, що я просто не можу сприймати себе без тебе. Ти стала невід'ємною частиною мене - ми абсолютно все 
        робимо разом. Навіть, якщо ми на відстані, я відчуваю, що ти поруч - всі рішення, всі думки, всі проблеми,  що б не сталося ми ділимося цим всим
        і я безмежно щаслива мати таку людину поруч.<br>
        Скоро ми закінчимо школу і навряд чи зможемо бачитись так часто, як зараз, тому я хочу проводити з тобою більше часу, робити для тебе багато 
        багато всього,<br> поки можу.<br>
        Я сподіваюсь подарунок тобі сподобається, люблю тебе</p>
        </div><button class="paw-btn"><img src="img/paw.svg" alt="paw" width="200" height="200"></button></div>`)
    modalNote.show();
    let modalWin = modalNote.element(); 

    const btnClose = modalWin.querySelector('.paw-btn');
    btnClose.addEventListener('click', ()=>{
        modalNote.close();
    });
});

// us 
const billie = document.querySelector('.billie');
const sabrina = document.querySelector('.sabrina');
const nana = document.querySelector('.nana');
const hachi = document.querySelector('.hachi');

billie.addEventListener('click', ()=>{
    sabrina.style.transform = 'translateX(-5px)';
});
nana.addEventListener('click', ()=>{
    hachi.style.transform = 'translateX(0)';
});