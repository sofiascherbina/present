let persList = document.querySelectorAll('.pers-pic-list_li');
let btnList = document.querySelectorAll('.pers-btn');
let btnListParent = document.querySelector('.pers-btn-list');

btnListParent.addEventListener('click', (event)=>{
    if(event.target.nodeName !== 'BUTTON'){
        return;
    }
    persList.forEach(pic =>{
           if( event.target.id === pic.id){
               pic.classList.add('chosen');
           }
           else{
               pic.classList.remove('chosen');
           }
       })
});
// function chosePic (event){
   
// }