// ****** SELECT ITEMS **********
let alert=document.querySelector('.alert');
let groceryForm=document.querySelector('.grocery-form');
let grocery=document.getElementById('grocery');
let submitButton=document.querySelector('.submit-btn');
let groceryContainer =document.querySelector('.grocery-container');
let groceryList=document.querySelector('.grocery-list');
let clearButton=document.querySelector('.clear-btn');
// edit option
let editElement;
let editFlag=false;
let editId="";

// ****** FUNCTIONS **********


const addItem=(e)=>{
    e.preventDefault();
    let groceryValue=grocery.value;
    //console.log(groceryValue);
    //Now adding the dynamic id value for uniqueness
    let dynamicId=new Date().getTime().toString();
    //console.log(dynamicId);

    if(groceryValue !=='' && editFlag===false){
//console.log('items is added');
let element=document.createElement('article');
element.classList.add('grocery-item');
//adding the id
let attributeId=document.createAttribute('data-dynamicId');
attributeId.value=dynamicId;
element.setAttributeNode(attributeId);
element.innerHTML=`<p class="title">${groceryValue}</p>
<div class="btn-container">
  <button type="button" class="edit-btn">
    <i class="fa fa-edit"></i>
  </button>
  <button type="button" class="delete-btn">
    <i class="fa fa-trash"></i>
  </button>
</div>`;
//append child
groceryList.appendChild(element);
alertData('item is added','success');
//now showing the container as setup as hidden
groceryContainer.classList.add('show-container');

//adding to the local storages
addToLocalStorage();
//setting valuesto default
setToDefault();
    }else if(groceryValue !=='' && editFlag===true){
console.log('items can be edited');
    }else{
// console.log('here is empty value');
alertData('Empty Value','danger');
    }
}
const alertData=(textData,className)=>{
    alert.textContent=textData;
    alert.classList.add(`alert-${className}`);

    // setting the time for disappering of the message
    setTimeout(()=>{
alert.textContent="";
alert.classList.remove(`alert-${className}`);
    },1000)
}
// ****** EVENT LISTENERS **********
groceryForm.addEventListener('submit',addItem);


// ****** LOCAL STORAGE **********
const addToLocalStorage =(id,value)=>{
    console.log('value added to local storage');
}
const setToDefault =()=>{
    //console.log('items set to default');
    grocery.value="";
    editFlag=false;
    editId="";
    submitButton.text="submit";

}
// ****** SETUP ITEMS **********
