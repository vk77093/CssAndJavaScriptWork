const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

let button=document.getElementById('btn');
let colorShow=document.querySelector('.color');

const changeColor=()=>{
    let randomColor=randNumberGen();
    console.log(randomColor);
    document.body.style.backgroundColor=colors[randomColor];
    colorShow.textContent=colors[randomColor];
}
// insteda of getting random number we need to make one function random color

const randNumberGen=() => {
    return Math.floor( Math.random() *colors.length);
}

button.addEventListener('click',changeColor);