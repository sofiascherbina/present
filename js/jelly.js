let content = document.querySelector('.content');
let angel = document.querySelector('.angel');
let gate = document.querySelector('.gate');
let angelCont = document.querySelector('.angel-container');
let textList = document.querySelectorAll('.text-list_li');
let currentIndex = 0;

function alert(){
     PNotify.alert({text:'Click on the mirror and on the jellyfish, sweetness', icon:false, delay:5000, addClass:'alert jelly-alert'});
}
alert();

gate.addEventListener('click', ()=>{
    angelCont.classList.add('moving');
     
});
angelCont.addEventListener('animationend', ()=>{
    currentIndex++;
    showText();
    angelCont.classList.remove('moving');
});

function showText() {
    angel.style.transform = 'rotateY(180deg)';
    textList.forEach(el => el.classList.remove('shownText'));
    if (textList[currentIndex]) {
        textList[currentIndex].classList.add('shownText');
    }
    if(currentIndex === 5){
        content.classList.add('visible');
    }
}
showText();


const buttons = document.querySelectorAll('.jelly-btn');

// Шляхи до різних маленьких картинок:
const burstImages = {
  chudik: '/img/chudik.png',
  star: '/img/star.png',
  heart: '/img/jelly-heart.png',
};

buttons.forEach(button => {
  const theme = button.dataset.theme;
  const burstContainer = button.querySelector('.effect');

  button.addEventListener('click', () => {
    for (let i = 0; i < 6; i++) {
      const burst = document.createElement('span');
      burst.classList.add('burst');

      // Встановлюємо відповідну картинку
      burst.style.backgroundImage = `url(${burstImages[theme]})`;

      // Генеруємо напрямок розльоту
      const angle = Math.random() * 2 * Math.PI;
      const radius = 60 + Math.random() * 40;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      burst.style.setProperty('--x', `${x}px`);
      burst.style.setProperty('--y', `${y}px`);

      burstContainer.appendChild(burst);

      // Автоматично видаляємо після анімації
      setTimeout(() => burst.remove(), 800);
    }
  });
});
