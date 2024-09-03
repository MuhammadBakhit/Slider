let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;

let lengthItems = items.length - 1 ; 

function nextClick() {

    if (active + 1 > lengthItems) {
        active = 0;
    }else{
        active += 1;
    }
    reloadSlid();
}
setInterval(function (){
    nextClick()
},5000)
function prevClick() {

    if (active - 1 < 0) {
        active = lengthItems;
    }else{
        active = active - 1;
    }
    reloadSlid();
}
function reloadSlid() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActive = document.querySelector('.slider .dots li.active');
    lastActive.classList.remove('active');
    dots[active].classList.add('active');
}
dots.forEach((li, key) => {
    li.addEventListener('click', function () {
        active = key;
        reloadSlid()
    })
})