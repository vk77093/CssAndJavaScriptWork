let myname="vijay";
let lastname=new String();
lastname="kumar";
console.log(myname,': ', lastname)

//Escape of the string

let esc="the value in the \"Database\" is quite right";
console.log(esc);

console.log("-----------finding the string through indexOf method-------")
let indOf="the value in the database is not null";
let find=indOf.indexOf("value",2);
console.log(find);

console.log("-----------finding the string through lastIndexOf method-------")
 let find2=indOf.lastIndexOf("value",6);
 console.log(find2);

 console.log("-----------finding the string through search method-------")
 let find3=indOf.search("value",6);
 console.log(find3);

 console.log("-----------finding the string through slice method-------")
 let datas="apple,mango,banana";
 let slicedData=datas.slice(5,-2);
 console.log(slicedData);

 console.log("-----------Display only 280 character-------")
 let myTweets="Lorem ipsum dolor sit amet consectetur, adipisicing elit. wbdb wbuyduy ywbdyugyu wgdgw wdiuw  \
 Aut nihil veritatis magnam rem porro quidem quae, nostrum illo, provident,iudeiuge ebdybey edbuegiu \
 laborum est officiis natus voluptas aperiam. Quaerat odio numquam delectus quos vegdyuegydgyeg eduygegd edugeg!";
 let actualWords=myTweets.slice(0,280);
 console.log(actualWords);
 console.log(actualWords.length);

 console.log("-----------Extracting the string-------")
 /* There are mainly three method is available for perform that
 1. slice, 2. subString, 3.subStr */

 let extString="quick brown fox";
 let getString=extString.substring(5, 12);
 console.log(getString);
   
 let repl=getString.replace('brown','BROWN');
 console.log(repl);

 console.log("-----------charAt and charAtCode method-------")

 let charVal="vijay";
 console.log(charVal.charAt(4));
 console.log(charVal.charCodeAt(4));
 console.log("-----------Find the unicode of the last charater-------")
 let len=charVal.length-1;
 console.log(charVal.charCodeAt(len));

 console.log("-----------Property Access in the []-------")
// it allows the acces of the string
console.log(charVal[4]);

console.log("-----------other method-------")
let checkOther="    how are YOU Vijay VIJAY    ";
console.log(checkOther.toUpperCase());
console.log(checkOther.toLowerCase());
console.log(checkOther.trim());

console.log("-----------Coberting String into Array using split method-------")
let converStr="a ,b, c,d";
console.log(converStr.split(','));
console.log(converStr.split(' '));


 

