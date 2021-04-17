var cond='rain';
if(cond=='sunny'){
// if(cond == 'rain'){
    console.log('take a rain coat');
}else{
    console.log('no need to take rain coat')
}

// finding leap year

var year=2001;
if(year %4 ===0){
    if(year %100 ===0){
        if(year %400 ===0){
            console .log('thats year '+year+ ' is a leap year')
        }
        else{
            console.log('thats year '+year+ ' is not a leap year') 
        }
        
    }else{
        console.log('thats year '+year+ ' is not a leap year') 
    }  
}else{
    console.log('thats year '+year+ ' is not a leap year')
}

/* In java-script their are mainly 5 type of fales variables
0,'',undefined,NaN, false**
*/
if(scrore=0){
    console.log('you lose the game')
}else{
    console.log('you won the game')
}
 
if(scroes=5){
    console.log('you lose the game')
}else{
    console.log('you won the game')  
}

//ternary operator=the value which take three operands, shortor form of if else
 var age=18;
 if(age>=18){
     console.log('you can vote');
 }else{
     console.log('you cant vaote');
 }

 //with ternary operator

  var age=17;
 console.log((age>=18)?'you can':'you cant')

//swith statment
var area='rec';
var p=3.14, l=4,b=4, r=2
switch(area){
  case 'circle':
      console.log('the area of circle is '+(p*r**2));
      break;
      case 'rec':
          console.log('the area of rectangle is '+ (l*b));
          break;
          case 'traingle':
              console.log('the area of traianle is '+(l*b)/2);
              break;
              default:
                  console.log('enter the valid data')
}

//while loops
/* block scope will never enter untill it's condtion is matched */
var numWhile=0;
while(numWhile <=10){
    console.log(numWhile++)
}

//do while loops it will enter and provide the firts value
var numdo=20;
do{
    console.log(numdo++);
}while(numdo <=10)
 // program for write the table for any number

 var tabelind=1;
 var tableNum=8;
 for(tabelind; tabelind<=10; tabelind++){
     console.log(tableNum + ' * '+ tabelind +' = ' +(tabelind*tableNum))
 }