let imgSlider = document.querySelectorAll('.slider-container .slider-box');
let btnPos = document.querySelector('#posterior');
let btnAnt = document.querySelector('#anterior');
let btnNav = document.querySelectorAll('.btn-nav-box .btn-nav');

let contadorImg = imgSlider.length;
let imgAtiva = 0;
let intervalo;

function nextImage(){
    imgAtiva++;

    if(imgAtiva >= contadorImg){
        imgAtiva = 0;
    }

    mostrarSlider();
}

function iniciarAutoPlay(){
    intervalo = setInterval(nextImage, 5000);
}

function reiniciarAutoPlay() {
    clearInterval(intervalo);
    iniciarAutoPlay();
}

btnPos.addEventListener('click', ()=>{
    nextImage();
    reiniciarAutoPlay();
})

btnAnt.addEventListener('click', ()=>{
    imgAtiva--;

    if(imgAtiva < 0){
        imgAtiva = contadorImg - 1;
    }

    reiniciarAutoPlay();
    mostrarSlider();
})

function mostrarSlider(){
    let antigaImg = document.querySelector('.slider-container .slider-box.ativo');
    let antigoBtn = document.querySelector('.btn-nav-box .btn-nav.ativo');

    antigaImg.classList.remove('ativo');
    antigoBtn.classList.remove('ativo');

    imgSlider[imgAtiva].classList.add('ativo');
    btnNav[imgAtiva].classList.add('ativo');
}

btnNav.forEach((btn, indice)=>{
    btn.addEventListener('click', ()=>{
        imgAtiva = indice;
        
        mostrarSlider();
        reiniciarAutoPlay();
    })
});

iniciarAutoPlay();