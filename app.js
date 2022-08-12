const menue =document.querySelector('#mobile-menue')
const menuelinks =document.querySelector('.navbar__menue')


menue.addEventListener('click',function() {
    menue.classList.toggle('is-active')
    menuelinks.classList.toggle('active')
});