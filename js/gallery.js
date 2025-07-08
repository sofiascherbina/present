const btnSun = document.querySelector('.btn-sun');
const btnSnowflake = document.querySelector('.btn-snowflake');
const btnMushroom = document.querySelector('.btn-mushroom');
const btnFlower = document.querySelector('.btn-flower');

function alert(){
     PNotify.alert({text:'Click on the seasons and wait, love', icon: false, delay:5000, addClass:'alert'});
}
alert();
 let gallery = basicLightbox.create(`<div class="gallery-slide">
        <div class="gallery-slide-container">
            <div class="theme-photo"></div>
            <ul class="photo-list">
                <li class="photo-list-li photo-cat1 photo-bouquet photo-inShelter photo-pikmi"></li>
                <li class="photo-list-li photo-cat2 photo-lock photo-cinema photo-krasotka"></li>
                <li class="photo-list-li photo-flowers photo-flower1 photo-boots photo-fontain"></li>
                <li class="photo-list-li photo-kurtosh photo-flower2 photo-shopping photo-genTogether"></li>
            </ul>
            <button class="paw-btn">
                <img src="img/paw.svg" alt="paw" width="200" height="200">
            </button>
            <div class="anim-reaction"></div>
        </div>
    </div>`);
let galleryEl = gallery.element();
let openedGallery = galleryEl.querySelector('.gallery-slide');
const btnClose = galleryEl.querySelector('.paw-btn');

btnClose.addEventListener('click', ()=>{
    gallery.close();
     setTimeout(() => {
    openedGallery.classList.remove('summer', 'winter', 'spring', 'autumn');
  }, 300);
});
btnSun.addEventListener('click', ()=>{
    gallery.show();
    openedGallery.classList.add('summer');
});
btnSnowflake.addEventListener('click', ()=>{
    gallery.show();
    openedGallery.classList.add('winter');
});
btnMushroom.addEventListener('click', ()=>{
    gallery.show();
    openedGallery.classList.add('autumn');
});
btnFlower.addEventListener('click', ()=>{
    gallery.show();
    openedGallery.classList.add('spring');
});