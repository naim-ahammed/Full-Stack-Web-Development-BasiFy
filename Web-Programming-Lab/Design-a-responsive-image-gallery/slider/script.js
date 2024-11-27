let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active =0;
let lengthItems = items.length - 1;

next.onclick = function(){
    // active +=1;
    if(active+1>lengthItems){
        active = 0;
    }else{
        active = active +1;
    }
    reloadSlider();
}
prev.onclick = function (){
    if(active-1<0){
        active = lengthItems;
    }else{
        active = active -1;
    }
}

// let reloadSlider = setInterval(()=>{
//     next.click()
// },3000 );

function reloadSlider(){
    let cheakleft = items[active].offsetLeft;
    list.style.left = -cheakleft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots.classList.remove('active');
}

dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active=key;
        reloadSlider();
    })
})
