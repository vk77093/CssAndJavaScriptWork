// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
let togglesButton = document.querySelector('.nav-toggle');
let linksCheck = document.querySelector('.links');

// togglesButton.addEventListener('click',()=>{
//     //console.log(linksCheck.classList);
//     //for checking whether the class is their or not
//     //console.log(linksCheck.classList.contains('show-links'));
//     let trueOrNOT=linksCheck.classList.contains('show-links');
//     if(trueOrNOT){
//         linksCheck.classList.remove('show-links');
//     }else{
//         linksCheck.classList.add('show-links');
//     }
// })

//with the help of toggle function
togglesButton.addEventListener('click',()=>{
    linksCheck.classList.toggle('show-links');
})