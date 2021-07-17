const btnDown = document.querySelector('.down-button');
const btnUp = document.querySelector('.up-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slideCount =mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container')
let activeSlideIndex = 0;

sidebar.style.top = `-${(slideCount - 1)*100}vh`;

btnUp.addEventListener('click', ()=>{
    changeSlide('up');
});
btnDown.addEventListener('click', ()=>{
    changeSlide('doun')
});

const changeSlide=(direction)=>{
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex === slideCount){
            activeSlideIndex = 0
        }
    }else if(direction ==='doun'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slideCount - 1
        }
    }
    const height = container.clientHeight
mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}


//console.log(mainSlide);