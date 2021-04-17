// there are mainly 2 way to define object in the js
// In js the object are key:value pair which is mainly
// used for data storing(like school bag)

//1st way
let myData={
    myname:'vijay',
    myAge:27,
     getAllData:function(){
         console.log(`my name is ${myData.myname} and my age is ${myData.myAge}`);
     }
}
console.log(`the value withou function
is ${myData.myname} and ${myData.myAge}`);
console.log(`data with calling function`);
myData.getAllData();

//2nd way we can call without writting function

let myData2={
    myname:"Vijay Kumar",
    myAge:27,
    getAllData2(){
        console.log(`my name is ${myData2.myname} and my age is ${myData2.myAge}`);
    }
}
myData2.getAllData2();

// we can call object inside object

let myData3={
    myinside:{
        myname:'Vijay Kumar2',
        myAge:27,
    },
    myClass:'b-tech',
    getAllData3(){
        console.log(`my internal data is ${myData3.myinside.myname} and
        ${myData3.myinside.myAge} and ${myData3.myClass}`);
    }
}
myData3.getAllData3();

/* About "this" keyword in js this keyword define the current
context or current value of the object */

//it will show the window property as it refer to the window
//object peoprty

console.log(this);

//the function with this will also refer the window
// function myfuns(){
//     console.log(this);
// }
// myfuns()

/* but if we define the value in global object then it will refer only to that object */
var myobj="hello i will demonstarte this";
function fun(){
let hei="hello";
console.log(this.hei, myobj)
}
fun();

const myobj1={
    myname2:"vijay",
    myAge2:27,
    getAllData4(){
        console.log(this.myname2);
    }
}
myobj1.getAllData4();

//with Fat aarow function this keuword is not working
 
/* Array destructing [] */
let myData4=['vijay','kumar',27];
 console.log(`the original array with array destruct`);
 let [fn,ln,age]=myData4;
 console.log(ln);

 /*Object destruction { } */

 let myData5={
     myName:'vijay',
     lastName:'kumar',
     myAge:27
 }
 let 
 {myName,lastName,myAge}=myData5;
 console.log(myAge);

 //object properties for adding dynamic value;
 let myBranch='b-tech';
 let myData6={
      fnd:'vijay',
      [20+7]:'is my age',
      [myBranch]: 'you are belong form here',
 }
 console.log(myData6);

 // if the values are same then we not need to write key
 // value pair

 let fns='vijay';
 let myClass='B-tech';
 let myAge4=27;
 let myData7={
     fns,myClass,myAge4
 }
 console.log(myData7)

 /* spread operator  that will use like bucket box*/
 let mycolor=['red','yellow','blue'];
 let myfavCol=['pink','blue','yellow'];
 console.log(`tarditional method of adding mycolor is ${mycolor} 
 and my favcolor is ${myfavCol}`);
 console.log(`but problem arise if we want o add more color then
 we need to use spread opeartor`);

 myfavCol2=[...mycolor,'yellow','Green','Pink'];
 console.log(`Now my lsit of color is ${myfavCol2}`);

 /* Synchrous and Asynchrouns*/
 //synchrouns programig
 console.log('-----Synchrounous Data ---------')
 let fun2=()=>{
     console.log('fun2 is called');
 }
 let fun1=()=>{
     console.log('fun1 is called');
     fun2();
     console.log('fun1 is called again');
 }
 fun1();

 //Asynchrounous
console.log('-----Asynchrounous Data ---------')
 let funs2=()=>{
     setTimeout(()=>{
         console.log('funs2 is called after 2s')
     },2000);
 }
 let funs1=()=>{
     console.log('funs1 is called');
     funs2();
     console.log('funs1 is called again');
 }
 funs1();

 console.log('-----function currying---------')
 //sum(5)(8)(7)

 function sum(num1){
     return function(num2){
         return function(num3){
             console.log(num1+num2+num3);
         }
     }
 }
 sum(5)(8)(7)

 console.log('In one line with fat arrow');

 let sum1=(num4)=>(num5)=>(num6)=>
 console.log(num4+num5+num6);

 sum1(25)(36)(45);
