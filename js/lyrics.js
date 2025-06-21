let slider = document.querySelector('.lyrics-list');
let audios = document.querySelectorAll('.lyrics-list_li');
let leftBtn = document.querySelector('.left-btn');
let rightBtn = document.querySelector('.right-btn');
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
audios.forEach(audio =>{
    let playBtn = audio.querySelector('.play');
    let pauseBtn = audio.querySelector('.pause');
    let heart = audio.querySelector('.heart');
    let pinky = audio.querySelector('.pinky');
    pauseBtn.classList.add('off');
    playBtn.addEventListener('click', ()=>{
        playBtn.classList.add('off');
        pauseBtn.classList.remove('off');
        heart.classList.add('animation');
        pinky.classList.add('pinky-on');
});
pauseBtn.addEventListener('click', ()=>{
    pauseBtn.classList.add('off');
    playBtn.classList.remove('off');
    heart.classList.remove('animation');
    pinky.classList.remove('pinky-on');
});
});
