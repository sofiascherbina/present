const question = document.querySelector('.question');
const sureBtn = document.querySelector('.sure');
const noBtn = document.querySelector('.no');
const choice = document.querySelector('.choice');

sureBtn.addEventListener('click', ()=>{
    choice.style.backgroundImage = 'url("/img/sure-bg.png")';
});
noBtn.addEventListener('click', (event)=>{
        if(event.target.classList.contains('yeah')){
        choice.style.backgroundImage = 'url("/img/sure-bg.png")';
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