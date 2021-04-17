function sum(){
    var a=50;
var b =10;
var total=a+b;
console.log(total);
}
sum();

// function parameters and arguments

function sum1(c,d){ //function parameter
    var total=c+d
    console.log(total);
}
sum1();
sum1(12,25); // funtion arguments

//function expression example

function sum2(d,e){
    return totals=d+e;
}
var funExp=sum2(25,38);

console.log(funExp);

// anomyous function expression

var sum4=function(r,s){
    return total=r*s;
}
var myFun=sum4(45,78);
//console.log(sum4(25,47));
console.log('the mul of two value is '+myFun)