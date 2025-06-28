let ghost = document.querySelector('.ghost');
let roundList = document.querySelector('.round-list');
let exitBtn = document.querySelector('.exit-btn');
let roundPage = document.querySelector('.key-round-page');
let keys;
let keyContainer = document.querySelector('.movind-key');
let shownKey = document.querySelector('.movind-key_txt');
let currentIndex ;
let key ;
function alert(){
     PNotify.alert({text:'Click on the cloud, dear', icon:false, delay:5000, addClass:'alert'});
}
alert();

roundList.addEventListener('click', (event)=>{
     if(event.target.nodeName !== 'BUTTON'){
        return;
    }
    ghost.addEventListener('transitionend', ()=>{
        roundPage.classList.add('open');
        explanation.show();
    })
    switch(event.target.id){
        case '1':
            ghost.style.transform = 'translate(200px, -200px)';
            keys = ['i','l','o','v','e','u','p','r','i','n','c','e','s','s'];
            finished.element().querySelector('p').textContent = 'I love u, princess'
        break;
        case '2':
            ghost.style.transform = 'translate(700px, -200px)';
            keys = ['u','a','r','e','m','y','p','i','k','m','i'];
            finished.element().querySelector('p').textContent = 'U are my pikmi'
        break;
        case '3':
            ghost.style.transform = 'translate(1100px, -200px)';
            keys = ['u','t','e','b','e','s','u','c','h','a','m','y','a','g','k','i','y','n','o','s','e'];
            finished.element().querySelector('p').textContent = 'U tebe such a myagkiy nose'
        break;
    }
currentIndex = 0;
key = keys[currentIndex];
shownKey.textContent = key;
});
exitBtn.addEventListener('click',()=>{
    roundPage.classList.remove('open')
});

let explanation =  basicLightbox.create(`<div class="explanation"><p>You just have to type 
            the letters you see on the screen to see my message for you</p>
            <button class="play-btn"></button>
            <button class="exit-btn"></button></div>`);
let missed = basicLightbox.create(`<div class="missed"><p>You missed, dear...but it’s okay</p>
            <button class="try-again">Try again</button></div>`); 
let finished = basicLightbox.create(`<div class="finished"><p></p>
                <button class="exit-btn"></button></div>`); 
let playButton = explanation.element().querySelector('.play-btn');
let exitButton = explanation.element().querySelector('.exit-btn');
let retryBtn = missed.element().querySelector('.try-again');


playButton.addEventListener('click', ()=>{
    explanation.close();
    keyContainer.classList.add('falling');
    startChecking();
});
exitButton.addEventListener('click', ()=>{
    explanation.close();
    roundPage.classList.remove('open');
    keyContainer.classList.remove('falling');
    keyContainer.style.transform = 'translateY(-100%)';
});
document.addEventListener('keydown', (event) => {
    if (event.key === key) {
        currentIndex++;
        if(currentIndex === keys.length){
            finished.show();
            keyContainer.classList.remove('falling');
            finished.element().querySelector('.exit-btn').addEventListener('click', ()=>{
                roundPage.classList.remove('open');
                finished.close();
                keyContainer.classList.remove('falling');
                keyContainer.style.transform = 'translateY(-100%)';           
            })
        };
        key = keys[currentIndex];
        shownKey.textContent = key;
        keyContainer.classList.remove('falling');
        keyContainer.style.transform = 'translateY(-100%)';
        setTimeout(()=>{
            keyContainer.classList.add('falling');
            startChecking();
        }, 1000)
    } else if (event.key !== key) {
        missed.show();
        keyContainer.classList.remove('falling');
         clearInterval(checkInterval);
    }
});
function checkIfKeyOut() {
    const containerRect = roundPage.getBoundingClientRect();
    const keyRect = keyContainer.getBoundingClientRect();

    const isKeyOutFromBottom = keyRect.top > containerRect.bottom - containerRect.height * 0.3;

    if (isKeyOutFromBottom ) {
        missed.show();
        keyContainer.classList.remove('falling');
        return true;
    }
    return false;
};
let checkInterval;

function startChecking() {
    clearInterval(checkInterval); // на всякий випадок, щоб не створювати багато інтервалів
    checkInterval = setInterval(() => {
        if (checkIfKeyOut()) {
            clearInterval(checkInterval);
        }
    }, 100); // перевіряємо кожні 100 мс
}
retryBtn.addEventListener('click', ()=>{
    if(retryBtn.classList.contains('exit-btn')) {
        roundPage.classList.remove('open');
    }
    else{
        missed.close();
        currentIndex = 0;
        key = keys[currentIndex];
        shownKey.textContent = key;
        keyContainer.classList.add('falling');
        startChecking();
    }
});