const startBtn = document.querySelector('#start');
const screen = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board')
let time = 0;
score = 0;
const colors = ['#63753c','#a79f79','#b3cf5d','#d9636f','#609122']


startBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    screen[0].classList.add('up');
})

timeList.addEventListener('click', (e)=>{
    if(e.target.classList.contains('time-btn')){
        time = parseInt(e.target.getAttribute('data-time'))
        screen[1].classList.add('up');
        startGame()
    }
})

board.addEventListener('click',(e)=>{
    if(e.target.classList.contains('circle')){
        score++
        e.target.remove()  // пропадает после нажатия
        createRandomCircle()// появляется новый
        
    }
})

function startGame(){
    setInterval(decrisTime, 1000);
    createRandomCircle()
    setTime(time)
}

function decrisTime(){
    
    if(time === 0){
        finishGame()
    }else{
        let current = --time
        if(current < 10){
            current = `0${current}`
        }
        setTime(current)
    }
    
}

function setTime(value){
    timeEl.innerHTML = `00:${value}`
}

function finishGame(){
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`
}

function createRandomCircle(){
    const circle = document.createElement('div')
    const size = getRundomNumber(10, 60)
    setColor(circle)
    const {width, height} = board.getBoundingClientRect()
    const x = getRundomNumber(0, width-size)
    const y = getRundomNumber(0, height-size)
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    board.append(circle)
}

function getRundomNumber(min, max){
    return Math.round(Math.random() * (max - min) + min)
}
function getRandomColor(){
    const number= Math.floor(Math.random()*colors.length);
    return colors[number]
}
function setColor(circle){
    const color = getRandomColor()
    circle.style.background = color;
    
}