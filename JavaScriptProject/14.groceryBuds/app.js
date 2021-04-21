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
//getting the both button and setting event handlers

let deleteBtn=element.querySelector('.delete-btn');
let editBtn=element.querySelector('.edit-btn');
deleteBtn.addEventListener('click',deleteItem);
editBtn.addEventListener('click',editItem);

//append child
groceryList.appendChild(element);
alertData('item is added','success');
//now showing the container as setup as hidden
groceryContainer.classList.add('show-container');

//adding to the local storages
addToLocalStorage(dynamicId,groceryValue);

//setting valuesto default
setToDefault();
    }else if(groceryValue !=='' && editFlag===true){
//console.log('items can be edited');
editElement.innerHTML=groceryValue;
alertData('Data got changed','success')
//edit data in local storage
editLocalStorage(editId,groceryValue);
//set to default
setToDefault();

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

//clearing the ITEMS
const clearItems =()=>{
    let itemsCleared =document.querySelectorAll('.grocery-item');
    if(itemsCleared.length >0){
        itemsCleared.forEach((items)=>{
            groceryList.removeChild(items);  
        })
        //we want to also delete the container
        groceryContainer.classList.remove('show-container');
        alertData('The all items got cleared','danger');
        localStorage.removeItem('lists');

    }
}
// ****** EVENT LISTENERS **********
groceryForm.addEventListener('submit',addItem);
clearButton.addEventListener('click',clearItems);



// ****** LOCAL STORAGE **********
const addToLocalStorage =(id,value)=>{
    //console.log('value added to local storage');
    let addedItems={id:id,value:value};
    //console.log(addedItems);
    // let items=localStorage.getItem('lists')?
    // JSON.parse(localStorage.getItem('lists')):[];
    //console.log(items);
    let items=getLocalStorage();

    items.push(addedItems);
    localStorage.setItem('lists',JSON.stringify(items));
}
const removeFromLocalStorage =(id)=>{
   // console.log('value removed from local storage');
   let items=getLocalStorage();
  items=items.filter(function(item){
      if(item.id !==id){
        return item;
      }
      
    }); 
  // console.log(item)
   localStorage.setItem('lists',JSON.stringify(items));
}
const editLocalStorage =(id,value)=>{
    //console.log('value edited to local storage');
    let items=getLocalStorage();
    items=items.map(function(item){
        if(item.id===id){
            item.value=value;
        }
        return item;
    })
    localStorage.setItem('lists',JSON.stringify(items));
}

//For json Value to local storage

const getLocalStorage=()=>{
    return localStorage.getItem('lists')?
    JSON.parse(localStorage.getItem('lists')):[];
}
const setToDefault =()=>{
    //console.log('items set to default');
    grocery.value="";
    editFlag=false;
    editId="";
    submitButton.text="submit";

}

//adding and deleting the ietms Function

const deleteItem =(e)=>{
    //console.log('i will delete');
   let newElement= e.currentTarget.parentElement.parentElement;
   let idDel= newElement.dataset.dynamicId;
   groceryList.removeChild(newElement);
if(groceryList.children.length ===0){
    groceryContainer.classList.remove('show-container');
}
alertData('Items Got deleted','danger');
setToDefault();    
removeFromLocalStorage(idDel); 
}
const editItem =(e)=>{
    // console.log('items will edit');
    let editData=e.currentTarget.parentElement.parentElement;
    //it is giving us the title content
    editElement=e.currentTarget.parentElement.previousElementSibling;
    //it will set the form contentvalue of title
    grocery.value=editElement.innerHTML;
    editFlag=true;
    editId=editData.dataset.dynamicId;
    submitButton.textContent="edit";
}

//saving item in local storage check demonstarte
// localStorage.setItem('vijayData',JSON.stringify(['item1','item2']));

// let getDataofLocalStorage=JSON.parse(localStorage.getItem('vijayData'));
// console.log(getDataofLocalStorage);
// //for removing the item from local storage
// localStorage.removeItem('vijayData');

// ****** SETUP ITEMS **********
const settingTheItem=()=>{
    let items=getLocalStorage();
    if(items.length >0){
items.forEach(function(item){
    createClassListItem(item.id,item.value);
})
groceryContainer.classList.add('show-container');

    }
}

const createClassListItem =(dynamicId,groceryValue)=>{
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
    //getting the both button and setting event handlers
    
    let deleteBtn=element.querySelector('.delete-btn');
    let editBtn=element.querySelector('.edit-btn');
    deleteBtn.addEventListener('click',deleteItem);
    editBtn.addEventListener('click',editItem);
    
    //append child
    groceryList.appendChild(element); 
}

window.addEventListener('DOMContentLoaded',settingTheItem);