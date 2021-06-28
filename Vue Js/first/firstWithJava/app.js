 let buttonEl=document.querySelector('button');
let inputTextEl=document.querySelector('input');
let ulListEl=document.querySelector('ul');

// const clickFun=()=>{
//     // let enteredvalue=inputTextEl.value;
//     // let createList=document.createElement('li');
//     // createList.textContent=enteredvalue;
//     // ulListEl.appendChild(createList);
//     // //window.alert('hello');
//     // inputTextEl.value='';
// }
//buttonEl.addEventListener('click',clickFun)
buttonEl.addEventListener('click',()=>{
    let enteredvalue=inputTextEl.value;
    let createList=document.createElement('li');
    createList.textContent=enteredvalue;
    ulListEl.appendChild(createList);
    //window.alert('hello');
    inputTextEl.value='';
})

//my test for add and remove
// addButton=document.getElementById('add');
// removeButton=document.getElementById('remove');
// formElement=document.getElementById('formElement');

// addButton.addEventListener('click',()=>{
//      inputTextEl.appendChild(formElement);
//      window.alert('i will add');
// })