// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

let currentDate=document.querySelector('#currentDate');
let nextDate=document.querySelector('#nextDate');
 let dateData=new Date().getFullYear();
 currentDate.innerHTML=dateData;

 let backdate=dateData+1;
  let newDate=backdate.toString();
  //console.log(newDate);
  nextDate.innerHTML=newDate.slice(2);

// ********** close links ************
let navbarToggle=document.querySelector('.nav-toggle');
let linksContainer=document.querySelector('.links-container');
let links=document.querySelector('.links');

navbarToggle.addEventListener('click',()=>{
    //linksContainer.classList.toggle('show-links');
    //upper approch will give issue if we had dynamic navbar values

    let containerHeight=linksContainer.getBoundingClientRect().height;
    let linksHeight=links.getBoundingClientRect().height;
    if(containerHeight ===0){
        linksContainer.style.height=`${linksHeight}px`;
    }else{
        linksContainer.style.height=0;
    }
})
// ********** fixed navbar ************
let navbar=document.getElementById('nav');
let topLinksContainer=document.querySelector('.top-link');
window.addEventListener('scroll',()=>{
    let scrollHeight=window.pageYOffset;
    let navheight=navbar.getBoundingClientRect().height;
    if(scrollHeight >navheight){
        navbar.classList.add('fixed-nav');
    }else{
        navbar.classList.remove('fixed-nav');
    }
    // for showing the scroll top icon
    if(scrollHeight >500){
        topLinksContainer.classList.add('show-link');
    }else{
        topLinksContainer.classList.remove('show-link');
    }
})
// ********** smooth scroll ************
// select links
let scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((indLinks)=>{
indLinks.addEventListener('click',(e)=>{
    e.preventDefault();
    let getId=e.currentTarget.getAttribute('href');
    console.log(getId);
})
})
