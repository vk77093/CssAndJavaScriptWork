const quizDB=[
    {
        question:'What is the Full Form of HTML?',
        a:'some test question',
        b:'Not question',
        c:'HTML Means HTML',
        d:'hyper text markup language',
        ans:'ans4'
    },
    {
        question:'what is fuill form of css?',
        a:'some test question',
        b:'Not question',
        c:'Cascading style sheet',
        d:'hyper text markup language',
        ans:'ans2'
    },
    {
        question:'what is HTTP?',
        a:'http bchbshcb',
        b:'Cascading style',
        c:'something something',
        d:'hyper text markup language',
        ans:'ans3'
    },
    {
        question:'What is the Full Form of HTML?',
        a:'some test question',
        b:'Not question',
        c:'HTML Means HTML',
        d:'hyper text markup language',
        ans:'ans4'
    },
    {
        question:'what is fuill form of css?',
        a:'some test question',
        b:'Not question',
        c:'Cascading style sheet',
        d:'hyper text markup language',
        ans:'ans2'
    },
    {
        question:'what is HTTP?',
        a:'http bchbshcb',
        b:'Cascading style',
        c:'something something',
        d:'hyper text markup language',
        ans:'ans3'
    },
]
let question=document.querySelector('.question');
let option1=document.querySelector('#option1');
let option2=document.querySelector('#option2');
let option3=document.querySelector('#option3');
let option4=document.querySelector('#option4');
let submitBtn=document.querySelector('#submit');
let answers=document.querySelectorAll('.answer');
let showScore=document.querySelector('#showScore');

// first of all load the question from Array
let questionCount=0
let score=0;
const questionLoaded=()=>{
    let questionData=quizDB[questionCount];
    question.textContent=questionData.question;
    option1.textContent=questionData.a;
    option2.textContent=questionData.b;
    option3.textContent=questionData.c;
    option4.textContent=questionData.d;
}
const getUserAnswer=()=>{
    let answer;
    answers.forEach((currAns)=>{
     if(currAns.checked){
         answer = currAns.id;
         //console.log(answer);
     }
    });
    return answer;

}
const deselectALl=()=>{
    answers.forEach((curEle)=>
         curEle.checked=false
);
}
window.addEventListener('DOMContentLoaded',questionLoaded);
submit.addEventListener('click',()=>{
   let checkedAns= getUserAnswer();
   //console.log(checkedAns)
   let questionDataID=quizDB[questionCount];
   if(checkedAns ===questionDataID.ans){
       score++;
   }
   questionCount++;
   if(questionCount<quizDB.length){
       questionLoaded();
       deselectALl();
   }else{
       showScore.innerHTML=`
       <h3>You have scrored the ${score} out of ${quizDB.length} </h3>
       <button class="btn" onClick="location.reload()">Play Again</button>
       `;
       showScore.classList.remove('scoreArea');
   }
})
