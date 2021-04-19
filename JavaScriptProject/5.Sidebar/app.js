let togglesButton=document.querySelector('.sidebar-toggle');
let sideBarShow=document.querySelector('.sidebar');
let closeButton=document.querySelector('.close-btn');

togglesButton.addEventListener('click',()=>{
    sideBarShow.classList.toggle('show-sidebar');
})
closeButton.addEventListener('click',()=>{
    sideBarShow.classList.remove('show-sidebar');
})