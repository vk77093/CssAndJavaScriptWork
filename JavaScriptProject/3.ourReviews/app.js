// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
//  let img=document.getElementById('person-img');
// let authors=document.getElementById('author');
// let job=document.getElementById('job');
// let info=document.getElementById('info');

// let prevBtn=document.querySelector('.prev-btn');
// let nextBtn=document.querySelector('.next-btn');
// let randombtn=document.querySelector('.random-btn');
// let currentItem=0;

// window.addEventListener('DOMContentLoaded',()=>{
//   //console.log('Hello I am Loaded');
 
//   //let item=reviews[currentItem];
//   // //console.log(item);
//   // img.src=item.img;
//   // authors.textContent=item.name;
//   // job.textContent=item.job;
//   // info.textContent=item.text;
//   getData(currentItem);
// })

// const getData=(person)=>{
//   let item=reviews[person];
//   img.src=item.img;
//   authors.textContent=item.name;
//   job.textContent=item.job;
//   info.textContent=item.text;
// }
// nextBtn.addEventListener("click",()=>{
//   currentItem++;
//   if(currentItem> reviews.length-1){
//     currentItem=0;
//   }
//   getData(currentItem);
// })

// prevBtn.addEventListener("click",()=>{
//   currentItem--;
//   if(currentItem <0){
//     currentItem=reviews.length-1;
//   }
//   getData(currentItem);
// })
// randombtn.addEventListener("click",()=>{
//   currentItem=Math.floor(Math.random()*reviews.length);
//   //console.log(currentItem);
//   getData(currentItem);
  
// })

let imgData =document.getElementById("person-img");
let authorData =document.getElementById('author');
let jobData =document.getElementById('job');
let infoData =document.getElementById('info');
let arrayData=0;

let prevBtn =document.querySelector('.prev-btn');
let nextBtn =document.querySelector('.next-btn');
let randomBtn =document.querySelector('.random-btn');

window.addEventListener('DOMContentLoaded',()=>{
 // console.log(arrayData);
 //let itemData=reviews[arrayData];
 //console.log(itemData);
 getDataFun(arrayData);
})

const getDataFun=(personData)=>{
let itemData=reviews[personData];

imgData.src=itemData.img;
authorData.textContent=itemData.name;
jobData.textContent=itemData.job;
infoData.textContent=itemData.text;
}
nextBtn.addEventListener("click",()=>{
  arrayData++;
  if(arrayData >reviews.length-1){
    arrayData=0;
  }
  getDataFun(arrayData);
})
prevBtn.addEventListener("click",()=>{
  arrayData--;
  if(arrayData<0){
    arrayData=reviews.length-1;
  }
  getDataFun(arrayData);
})
randomBtn.addEventListener("click",()=>{
  arrayData=Math.floor(Math.random()*reviews.length);
  getDataFun(arrayData);
})