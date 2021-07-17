const sliders = document.querySelectorAll('.slide');

sliders.forEach(slide=>{
    slide.addEventListener('click', ()=>{
        clearActiveClassis();
        slide.classList.add('active')
    })
})
const clearActiveClassis =()=>{
    sliders.forEach(slide=>{
        slide.classList.remove('active')
    })
}