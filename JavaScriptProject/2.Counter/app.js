let startingCount =0;

let counterValue = document.getElementById('value');
let btns= document.querySelectorAll('.btn');

const myfunction =(e)=>{
let clickTest=e.currentTarget.classList;
//console.log(clickTest);
if(clickTest.contains('decrease')){
startingCount--;
}else if(clickTest.contains('reset')){
    startingCount=0;
}else{
startingCount++;
}if(startingCount >=1){
    counterValue.style.color="green";
    //document.body.style.backgroundColor="green";
}if(startingCount <1){
    counterValue.style.color="red";
}if(startingCount ===0){
    counterValue.style.color="black";
}
counterValue.textContent=startingCount;
}

btns.forEach( (getItems)=>{
    getItems.addEventListener('click', myfunction);
})

// btns.forEach(function(item){

// })
// btns.forEach((items)=>{
// //console.log(items);
// items.addEventListener('click',(e)=>{
//     //console.log(e.currentTarget.classList);
//     let clickCheck = e.currentTarget.classList;
//     //console.log(clickCheck); 
//     if(clickCheck.contains("decrease")){
//         startingCount --;
//     }else if(clickCheck.contains('increase')){
//         startingCount++;
//     }else{
//         startingCount=0;
//     }
//     counterValue.textContent=startingCount;
    
// })


//})