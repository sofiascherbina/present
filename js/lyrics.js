let slider = document.querySelector('.lyrics-list');
let audios = document.querySelectorAll('.lyrics-list_li');
let leftBtn = document.querySelector('.left-btn');
let rightBtn = document.querySelector('.right-btn');
// let audio = document.querySelector('.audio');
let currentIndex = 0;

function handlerShow(){
    let moved = -(500 + 15) * currentIndex; // ширина + gap
    // audios.forEach((audio,index)=>{
    //     if(index === currentIndex){
    //         audio.style.transform = `translateX(${moved}px)`;
    //     }
    // })
    slider.style.transform = `translateX(${moved}px)`;

    rightBtn.style.display = currentIndex  === audios.length - 1 ? 'none' : 'block';
    leftBtn.style.display = currentIndex === 0 ?'none' : 'block';
}
leftBtn.addEventListener('click', ()=>{
    currentIndex--;
    handlerShow();
});
rightBtn.addEventListener('click', ()=>{
    currentIndex++;
    handlerShow();
});
handlerShow();
audios.forEach(el=>{
    let audioText = el.querySelector('.audio-text');
    let audio = el.querySelector('.audio');
    let playBtn = el.querySelector('.play');
    let pauseBtn = el.querySelector('.pause');
    let heart = el.querySelector('.heart');
    let pinky = el.querySelector('.pinky');
    pauseBtn.classList.add('off');
    playBtn.addEventListener('click', ()=>{
        audio.play();
        audioText.classList.add('playing');
        audioText.classList.remove('paused');
        playBtn.classList.add('off');
        pauseBtn.classList.remove('off');
        heart.classList.add('animation');
        pinky.classList.add('pinky-on');
});
pauseBtn.addEventListener('click', ()=>{
    audio.pause();
    audioText.classList.add('paused');
    // audioText.style.animationPlayState = 'paused';
    pauseBtn.classList.add('off');
    playBtn.classList.remove('off');
    heart.classList.remove('animation');
    pinky.classList.remove('pinky-on');
});
});
