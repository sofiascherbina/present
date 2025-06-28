const question = document.querySelector('.question');
const sureBtn = document.querySelector('.sure');
const noBtn = document.querySelector('.no');
const choice = document.querySelector('.choice');

sureBtn.addEventListener('click', ()=>{
    choice.classList.add('sure');
});
noBtn.addEventListener('click', (event)=>{
        if(event.target.classList.contains('yeah')){
        choice.style.backgroundImage = 'url("/img/candy.png")';
        choice.style.backgroundSize = '60px 35px';
        choice.style.backgroundRepeat= 'no-repeat';
        question.textContent = "Fine then";
        noBtn.style.display = 'none';
        return
    }
    choice.style.backgroundImage = 'url("/img/knife.png")';
    choice.style.backgroundSize = 'cover';
    question.textContent = "You just missed, didn't you ?";
    sureBtn.style.display = 'none';
    noBtn.textContent = 'Yeah...';
    noBtn.classList.add('yeah')

});