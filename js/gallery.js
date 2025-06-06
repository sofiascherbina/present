const container = document.querySelector('.gallery-slide');
const btnClose = document.querySelector('.paw-btn');
const btnSun = document.querySelector('.btn-sun');
const btnSnowflake = document.querySelector('.btn-snowflake');
const btnMushroom = document.querySelector('.btn-mushroom');
const btnFlower = document.querySelector('.btn-flower');

btnClose.addEventListener('click', ()=>{
    container.classList.remove('is-open');
    container.classList.remove('summer');
    container.classList.remove('winter');
    container.classList.remove('spring');
    container.classList.remove('autumn');
});
btnSun.addEventListener('click', ()=>{
    container.classList.add('is-open');
    container.classList.add('summer');
});
btnSnowflake.addEventListener('click', ()=>{
    container.classList.add('is-open');
    container.classList.add('winter');
});
btnMushroom.addEventListener('click', ()=>{
    container.classList.add('is-open');
    container.classList.add('autumn');
});
btnFlower.addEventListener('click', ()=>{
    container.classList.add('is-open');
    container.classList.add('spring');
});