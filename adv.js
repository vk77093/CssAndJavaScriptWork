// example of event bubbling bottom->top
let outerPart=document.getElementById('outer');
let innerPart=document.getElementById('inner');

const parentCall=()=>{
    alert('hello I am inner Body');
    event.stopPropagation();
}
const childCall=()=>{
    alert('i am outer body');
    
}
outerPart.addEventListener('click',childCall);
innerPart.addEventListener('click',parentCall);

/* Event capturing its come from top->bottom
the third elements in eventListener is capturing
by default its false but if you mentioned it will either true */

let parent=document.querySelector('#outer2');
let child=document.querySelector('#inner2');

const parentCall1=()=>{
    alert('i am the top and outer part');
}
const childCall1=()=>{
alert('i am the bottom and inner part');
}
parent.addEventListener('click',parentCall1,true);
child.addEventListener('click',childCall1,true);

/* Higer Oreder function */
const add=(a,b)=>{
    return a+b;
}
const subs=(a,b)=>{
    return a-b;
}
const mult=(a,b)=>{
    return a*b;
}
// That's all three are call back function which we will use later
// HigerOrder Function
const calcu=(num1, num2, oper)=>{
return oper(num1,num2);
// return add(5,4);
}
console.log(calcu(5,4,add)); // here we called the add function