//variables and console defination
console.log('vijay');
// window.alert('hello vijay')
var myname="vijay"
var myage=28
var $mycity="jalandhar"
var _vijay="where is the"

console.log(myage ,''+ myname,' '+$mycity)
console.log(_vijay)

//Data Types 
/* there are mainly two types of data 1. primitives and 2. non-primitives
1. Primitives data types are undefined, boolean, number, string, bigint, symbol */
// example of primitives data types
var name1="vijay"
console.log(name1)
console.log(typeof(name1))

var age1=28
console.log(typeof(age1))
 
var boll=true
console.log(typeof(boll))

// Expreession and operator
console.log(5+20+25)


//about Post Fix and Prefix operator

var num=15;
var newNum=num++ +5
console.log(num)
console.log(newNum)


var num1=15
var newNum1=++num1;
console.log(num1)
console.log(newNum1)

// swap of value a=5 b=10 by using third value
var a=5;
var b=10;
var c=a;
 a=b //now a=10
 b=c; //now b=5

 console.log('A value is now '+ a);
 console.log('B value is now '+b);

 // swap of value a=5 b=10 without using third variable

 var a=5;
 var b=10;
 a=a+b; // now a =15
 b=a-b; // now b 5
 a=a-b;
 

 console.log('the value of a is '+ a)
 console.log('the value of b is '+ b)

 // differenec b/w == and === 

 // == onle evaluted the value
var num1=5
var num='5';
console.log(typeof(num1,num1))
console.log(num1== num)

// === also evalueted the value and also type of value
console.log(num1 === num)



 

