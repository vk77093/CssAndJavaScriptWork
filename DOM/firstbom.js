// function change(){
//     document.getElementById('chan').innerHTML="Hello Vijay i Changed";
// }

let change= ()=>{
    document.getElementById('chan').innerHTML="Hello Vijay i Changed"; 
    document.getElementById('chan').style.color="yellow";
}

//Four Ways of writting the events Listners

//first way is simply define at inline

//2nd way by function
let clickIt=()=>{
    alert('I am the alert through the function');
}

//3rd way through inline but as an id
let third=document.getElementById('thirdWay');
third.onclick=()=>{
    alert('hello i am third way of alert i am currently popular but i override the function');
}

//4th way of writting events 
let fourth=document.querySelector('#fourthWay');
fourth.addEventListener('click', ()=>{
    alert('i am the fourth one of writting events and don"\t\" override the function ')
})

// about events object check in window browser consoles

let eventsObjects=document.querySelector('#eventsObjects');
let checkEvents=()=>{
    alert('checking the event object in console');
    console.log(event);
    console.log(event.target);
    console.log(event.type);
}
eventsObjects.addEventListener('click',checkEvents);

// about Mouse Events

function mouseDown(){
  var chnage=  document.querySelector('.mytext');
  chnage.style.color="red";
}
function mouseup(){
    var chnage=document.querySelector('.mytext');
    chnage.style.color="yellow";
}
   let boxes=document.querySelector('.box');
//   boxes.addEventListener('mouseenter',()=>{
//       console.log('mouse entered');
//       boxes.style.backgroundColor="red";
//   })
  boxes.addEventListener('mouseleave',()=>{
      console.log('mouse leave');
      boxes.style.backgroundColor="yellow";
  })

//let boxes=document.querySelector('.box');
boxes.addEventListener('mouseenter',function(){
    console.log('mouse entered');
      boxes.style.backgroundColor="red";
})

//keywords events
let keytext=document.getElementById('keytext');
let keyPress= ()=>{
  keytext.innerHTML=`you pressed ${event} and key is ${event.key}`;  
}
let keyUp=()=>{
    keytext.innerHTML="key is up";
}
let keyDown=()=>{
    keytext.innerHTML="key is down";
}
keytext.addEventListener('keydown',keyPress,keyUp,keyDown);

let selectChange = ()=>{
    let textData=document.querySelector('#forminput').value;
    let selectData=document.querySelector('#selectID').value;
    console.log(`the input data is ${textData} and selcect data is ${selectData}`);
    let result=document.getElementById('result');
    result.style.fontSize="15px";
    result.style.color="red";
    result.innerHTML=`Input value is ${textData} and select data is ${selectData}`;

}

//Time Based Events in JS

let myname=document.querySelector('#resultTime');
const getName=()=>{
    myname.innerHTML="Loading......";
    setTimeout(()=>{
        myname.innerHTML="Vijay Kumar";
    },1000)
}
btn.addEventListener('click',getName);

// Set Interval

let timeData=document.getElementById('resultTime1');
let num=0;
let timeRef;
const setTime=()=>{
    timeData.innerHTML="Loading";
timeRef=setInterval(() => {
    timeData.innerHTML=num;
    num++;
}, 1000);
}


btn1.addEventListener('click',setTime);
// stop the time Interval for that i need to pass the refernce
btn2.addEventListener('click',()=>{
    
    clearInterval(timeRef)
});
