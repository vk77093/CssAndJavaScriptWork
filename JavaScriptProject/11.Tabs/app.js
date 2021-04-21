let btns=document.querySelectorAll('.tab-btn');
let about=document.querySelector('.about');
let articles=document.querySelectorAll('.content');

//adding the click event into about
// adding the parent element click and using event bubbling
about.addEventListener('click',(e)=>{
    //let getid=e.target;
    let getid=e.target.dataset.id;
    //console.log(getid);
    if(getid){
        btns.forEach((btn)=>{
            //removing and adding active from the buttons
            btn.classList.remove('active');
            e.target.classList.add('active');
        })
        //hiding the other articles
        articles.forEach((article)=>{
            article.classList.remove('active');
        })
        let element=document.getElementById(getid);
        element.classList.add('active');
    }
})