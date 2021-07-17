const board = document.querySelector('#board');
const SQUARES_NAMBER = 700;
const colors = ['#63753c','#a79f79','#b3cf5d','#d9636f','#609122']

for(let i=0; i<SQUARES_NAMBER; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', ()=>{
        setColor(square);
    })

    square.addEventListener('mouseleave', ()=>{
        remuveColor(square);
    })
    board.append(square)
}

function setColor(e){
    const color = getRandomColor()
    console.log(color);
    e.style.backgroundColor = color;
    e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function remuveColor(e){
    e.style.backgroundColor = 'rgb(74, 100, 100)'
    e.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(){
   const number= Math.floor(Math.random()*colors.length);
   return colors[number]
}