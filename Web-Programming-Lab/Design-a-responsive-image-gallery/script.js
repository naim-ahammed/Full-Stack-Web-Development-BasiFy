// Modal logic
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalCaption = document.getElementById("modal-caption");
const closeBtn = document.getElementById("close");

const figures = document.querySelectorAll(".gallery figure");

figures.forEach((figure) => {
    figure.addEventListener("click", () => {
        const img = figure.querySelector("img");
        const caption = figure.querySelector("figcaption").textContent;

        modal.style.display = "flex";
        modalImg.src = img.src;
        modalCaption.textContent = caption;
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});



// slider start
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

// slider end
