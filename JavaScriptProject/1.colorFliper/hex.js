const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", 
"B", "C", "D", "E", "F"];

let buttonid=document.getElementById('btn');
let showColor=document.querySelector('.color');
const getRandomColor=()=>{
    return Math.floor(Math.random()*hex.length);
}

const chnageHex=()=>{
    //console.log('i am clicked');
    let hexStart="#";
    let i;
    for (i=0; i<6;i++){
       // hexStart=hexStart+hex[2];
       hexStart+=hex[getRandomColor()]
    }
    document.body.style.backgroundColor=hexStart;
    showColor.textContent=hexStart;
}
buttonid.addEventListener('click',chnageHex);
