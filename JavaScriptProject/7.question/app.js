//using selectors inside the element
let questionsBtns=document.querySelectorAll('.question');

questionsBtns.forEach((que) => {
//console.log(que);
 let newBtnState=que.querySelector('.question-btn');
 //console.log(newBtnState);
newBtnState.addEventListener('click',()=>{
    // for show and hide when opened
    questionsBtns.forEach((stateText)=>{
//console.log(stateText)
if(stateText !==que){
  stateText.classList.remove('show-text')  
}
})
  // End for show and hide when opened
    que.classList.toggle('show-text');
})
})


// traversing the dom
// let questionBtns=document.querySelectorAll('.question-btn');
// let showText=document.querySelector('.question-text');

// questionBtns.forEach((btnsGet) => {
//     btnsGet.addEventListener('click',(eVal)=>{
//         let val=eVal.currentTarget.parentElement.parentElement;
//         //console.log(val);
//         val.classList.toggle('show-text');
//     })
// })