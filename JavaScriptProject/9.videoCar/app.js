// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

let switchBtn=document.querySelector('.switch-btn');
let videoData=document.querySelector('.video-container');

switchBtn.addEventListener('click',()=>{
    //let switchStatus=switchBtn.classList;
    //console.log(switchStatus);
    if(!switchBtn.classList.contains('slide')){
        //console.log(switchBtn)
        switchBtn.classList.add('slide');
        videoData.pause();
    }else{
        switchBtn.classList.remove('slide');
        videoData.play();
    }
})

//preloader class
let preloader=document.querySelector('.preloader');
window.addEventListener('load',()=>{
    preloader.classList.add('hide-preloader');
})