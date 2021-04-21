const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let giveway=document.querySelector('.giveway');
let deadline=document.querySelector('.deadline');
let deadlineFormat=document.querySelectorAll('.deadline-format h4');
//console.log(deadlineFormat)

// setting the custom date;
let tempDate=new Date();
let tempYear=tempDate.getFullYear();
let tempMonth=tempDate.getMonth();
let tempdate=tempDate.getDate();

//let futureDate=new Date(2021,03,21,13,35,00 );

let futureDate=new Date(tempYear,tempMonth,tempdate+9,14,25,00);
//console.log(futureDate)
let year=futureDate.getFullYear();
let month=futureDate.getMonth();
// console.log(months[month]);
let formatMonths=months[month];

let day=futureDate.getDay();
let formatDay=weekdays[day];
let date=futureDate.getDate();
let hour=futureDate.getHours();
let minute=futureDate.getMinutes();

let second=futureDate.getSeconds();
giveway.textContent=`Giveway Ends on ${formatDay} ${date}th ${formatMonths} ${year} 
at ${hour}:${minute}pm of time ${second}`;

//now getting the coutdown
let futureTime =futureDate.getTime();
//console.log(futureTime);

const getFunctionTime=()=>{
let today = new Date().getTime();
//console.log(today);
let todayTime=futureTime-today;
//console.log(todayTime);

//Days calculation
/* 
1s=1000ms
1m=60s
1hr=60m
1day=24hrs
*/

let oneDay=24*60*60*1000;
let oneHour=60*60*1000;
let oneMinute=60*1000;
//calculate all values

let oneDayGet=todayTime/oneDay;
oneDayGet=Math.floor(oneDayGet);
//console.log(oneDayGet);
let oneHourGet=Math.floor((todayTime %oneDay)/oneHour);
let oneMinuteGet=Math.floor((todayTime%oneHour)/oneMinute);
let oneSecondGet=Math.floor((todayTime%oneMinute)/1000);
//console.log(oneDayGet,oneHourGet,oneMinuteGet, oneSecondGet)

let valuesGet=[oneDayGet,oneHourGet,oneMinuteGet, oneSecondGet];
// formating in case it is only single digit
const formatThings=(items)=>{
  if(items < 10){
    return (items=`0${items}`);
  }else{
    return items;
  }
}
deadlineFormat.forEach((item, index)=>{
  item.innerHTML=formatThings(valuesGet[index]);
})
if(todayTime < 0){
  clearInterval(countdown);
  deadline.innerHTML=`<h4 class="expired">Sorry that Event got Ended</h4>`;
}
}

let countdown=setInterval(getFunctionTime,1000);
getFunctionTime();