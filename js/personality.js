const pictures=[
    {id:'hutao', url:'/img/hutao.jfif'},
    {id:'xieLian', url:'/img/xieLian.jfif'},
    {id:'narumi', url:'/img/narumi.jfif'},
    {id:'lucy', url:'/img/lucy.jfif'},
    {id:'ruby', url:'/img/ruby.jfif'},
];
let persList = document.querySelectorAll('.pers-pic-list_li');
let btnList = document.querySelectorAll('.pers-btn');
let btnListParent = document.querySelector('.pers-btn-list');
let animGirl = document.querySelector('.anim-girl');

btnListParent.addEventListener('click', (event)=>{
    if(event.target.nodeName !== 'BUTTON'){
        return;
    }
    persList.forEach(pic =>{
        animGirl.addEventListener('transitionend', () => {   //transitionend - викликається, коли завершився CSS transition
        animGirl.classList.add('arrived');
            if( event.target.id === pic.id){
               pic.classList.add('chosen');
                pictures.forEach(el =>{
                     if(pic.id === el.id){
                         pic.style.backgroundImage = `url('${el.url}')`;
                     }
           })  
           }
           else{
               pic.classList.remove('chosen');
               pic.style.backgroundImage = `url('/img/pers-bg.jfif')`;
           } 

    });
    animGirl.classList.remove('arrived');
       })
    switch(event.target.id){
        case'xieLian':
        animGirl.style.transform = 'translate(590px, 190px)';
        break;

        case'lucy':
        animGirl.style.transform = 'translate(420px, 540px)';
        break;

        case'narumi':
        animGirl.style.transform = 'translate(130px, 540px)';
        break;

        case'ruby':
        animGirl.style.transform = 'translate(700px, 540px)';
        break;

        case'hutao':
        animGirl.style.transform = 'translate(300px, 190px)';
        break;
    }
});
