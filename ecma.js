 
 // differenec b/w var const and let
//  function print(){
// var fn="vijay";
// var ln="kumar";
// console.log(fn);
// console.log(ln);
// if(true){
//     var city="jalandhar";
//     console.log('inner '+ fn)
//     console.log('inner '+ ln)
//     console.log ('inner '+city)
// }
// console.log('OUTER '+ fn)
//     console.log('OUTER '+ ln)
//     console.log ('OUTER '+city)
//  }
//  print();

 //By using Let
//  console.log('///////  By using LET /////////')
//  function print2(){
//     let fn="vijay";
//     let ln="kumar";
//     console.log(fn);
//     console.log(ln);
//     if(true){
//         let city="jalandhar";
//         console.log('inner '+ fn)
//         console.log('inner '+ ln)
//         console.log ('inner '+city)
//     }
//     console.log('OUTER LET '+ fn)
//         console.log('OUTER LET '+ ln)
//         console.log ('OUTER VAR '+city)
//      }
//      print2();

//template literals for avoiding the log string conatination

let table=16;
let tableIndex=1;
 for(tableIndex;tableIndex<=10;tableIndex++){
     //console.log(table + ' * '+ tableIndex + ' = '+ (table *tableIndex))
     // by using Template literals now i can eaily print
     console.log(`${table} * ${tableIndex} = ${table *tableIndex}`)
 }
 // default arguments in function

 let fun=function(a,b=58){
     return a+b;
 }
 console.log(fun(25))

 //fat arrow function

 const sum=()=>{
     num1=10;
     num2=20;
     return num1+num2;
 }
 console.log(`the sum of two value is ${sum()}`)

 //Arrays In JS
 console.log('-------Arrays In Js -----------------')
 var myFriends=['vijay','dalip','krishna','Varinder'];
 console.log(myFriends[2]);

 // getting it through For Loops
 console.log('---------------getting it through For Loops---------------')

 for(let i=0;i<myFriends.length-1; i++){
     console.log(myFriends[i]);
 }

 console.log('---------------getting it through For in Loops---------------')
 // for In loops only show the index value of the data
 for(ele in myFriends){
     console.log(ele);
 }
 console.log('---------------getting it through For of Loops---------------')
 //For -of loops shows the values of the data
 for(ele of myFriends){
     console.log(ele);
 }
 console.log('---------------getting it through forEach Loops---------------')
 // for each loops will show all the three properties
 myFriends.forEach(function(ele,ind,ar){
     console.log(ele)
 })

 console.log('---------------Push method---------------')
//it will going to add the values in last of the array

const animals=['bull','cow','buffaloo'];
console.log(animals);
 animals.push('murga');
 console.log(animals);
 animals.push('goat','second','hello','sheep');
 console.log(animals)

 console.log('---------------unShift Method ---------------')
 // it will going to insert at the begining of the array

 let numbers=[1,2,3,6,8];
 console.log(numbers);
 numbers.unshift(5,7)
 console.log(numbers);
 console.log('---------------pop Method ---------------')
 // it will delete the last elements of the arrya

 let num=[2,4,6,4,8];
 num.pop();
 console.log(num);

 console.log('---------------shift Method ---------------')
 // it will delete the first elements of the array
 num.shift();
console.log(num);

console.log('---------------splice Method ---------------')
// it used for all add delete and upadte and it will consider the three parameters
// and always return the deleted values array index number

let months=['jan','feb','mar','apr','june'];
console.log(months);
// adding the value in last
let varl= months.splice(months.length,0,'dec','nov');
console.log(months);

// for checking its return value;
console.log(varl);
console.log('---------------Upating the value through splice  ---------------')
let monthUp=['jan','feb','mar','apr','june'];
console.log(monthUp)
// using indexOf method for find the index value of the array;
let upadte=monthUp.indexOf('mar');
if(upadte != -1){
    monthUp.splice(upadte,1,'MAR');
    console.log(monthUp);
}else{
    console.log('no data Found');
}

console.log('---------------deleting the value through splice  ---------------')

let monthUps=['jan','feb','mar','apr','june'];
console.log(monthUps);
let del=monthUps.indexOf('apr');
if (del != -1) {
    monthUps.splice(del,1);
    console.log(monthUps);
} else {
    console.log('no data Found');
}

console.log('---------------Map Method---------------')
/* It returns the new array containing the result of the array
 and also not make any changes in the old array value likes for each or other loops valuen */
let var2=['jal','delhi','ludh','kol'];
console.log(var2);
// here we will use the fat arrow function, why using that we not need to write function name
 let var2get=var2.map((curEle, index, arr)=>{
     return curEle=='delhi';

 })
 console.log(var2get);

 //traversiing through map function
 console.log('---------------traversiing through map function  ---------------')
let var2get1=var2.map((curEle,ind,arr)=>{
    return `the index of ${ind} current Elemets ${curEle} in array of ${arr}`;

})
console.log(var2get1)
console.log('---------------find square root value through map function  ---------------')
let tabel=[25,36,49,81,100]
 let findSqr=tabel.map((cyr)=>{
     return Math.sqrt(cyr);
 })
 console.log(tabel);
 console.log(findSqr);

 console.log('---------------mul each ele with 2 and return only value greater than 10 ---------------')
 // here we will use the filter and map method like chaning

 let mulVal=[2,4,8,12];
 let mulget=mulVal.map((curEle)=>{
    
    return curEle*2;
    
 }).filter((curEle)=>{
     return curEle >10;
 })
 console.log(mulVal);
 console.log(mulget);
 
 console.log('---------------Reduce Method---------------')
 // it is used for converting the 2d or 3rd array into single value
 //it also used for calculation and have four arguments 
 let red=[7,8,5,6];
  let sums=red.reduce((acc,curEle,ind,arr)=>{
      return acc+=curEle;
  })
  console.log(sums);

  console.log('---------------Flatten the 2d array Reduce Method---------------')
  let arr4=[
      ['vijay','kumar'],
     ['ajit','variable'],
     ['krishna',24],
     ['Rohit',48]
]
let flat=arr4.reduce((acc,curEle)=>
acc.concat(curEle)
)
console.log(flat);
