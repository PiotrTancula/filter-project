let buttonAll = document.getElementById('buttonAll');
let buttonSeason = document.getElementById('buttonSeason');
let buttonColor = document.getElementById('buttonColor');
let buttonLanguage = document.getElementById('buttonLanguage');
let buttonTree = document.getElementById('buttonTree');
let boxes = [...document.querySelectorAll('.box')];
let xButton = document.getElementById('xButton');

let divButton = document.getElementById('divCreation');
let objects = document.getElementById('objects');

let popupBackground = document.getElementById('popups');
let popupImage = document.getElementById('popupWindow');

buttonAll.addEventListener('click', displayAll);
buttonSeason.addEventListener('click', displaySeasons);
buttonColor.addEventListener('click', displayColors)
buttonLanguage.addEventListener('click',displayLanguage);
buttonTree.addEventListener('click', displayTree)

let classHolder = document.getElementById('classHolder');
let valueHolder = document.getElementById('valueHolder');


divButton.addEventListener('click',addDiv);

function addDiv(){
    let divElement = document.createElement('div');

    divElement.classList.add('box');
    divElement.classList.add(classHolder.value);
    
    divElement.textContent = (valueHolder.value).toUpperCase();
    divElement.addEventListener('click',show);
    
    objects.appendChild(divElement);
    boxes.push(divElement);
    

    alert(`You've successfully added a box with a ${classHolder.value} class and ${valueHolder.value} description`);

    classHolder.value = '';
    valueHolder.value = '';




}


function displayAll(){
   boxes.forEach( box => {
       if(box.classList.contains('box')){
          box.style.display = 'block';
       }
   })
}

function displaySeasons(){
    boxes.forEach( box => {
        if(box.classList.contains('season')){
            box.style.display = 'block';
           
            
        }else{
            box.style.display = 'none';
        }
    })
}

function displayColors(){
    boxes.forEach( box => {
        if(box.classList.contains('color')){
            box.style.display = 'block';
        }else{
            box.style.display = 'none';
        }
    })
}

function displayLanguage(){
    boxes.forEach( box => {
        if(box.classList.contains('language')){
           box.style.display = 'block';
        }else{
            box.style.display = 'none';
        }
    })
 }

 function displayTree(){
    boxes.forEach( box => {
        if(box.classList.contains('tree')){
            box.style.display = 'block';
        }else{
            box.style.display = 'none';
        }
    })
}


function show(event){

    let eventTarget = event.target.textContent;
    console.log(eventTarget);

    popupBackground.style.display = 'block';
    popupImage.style.display = 'block';

    popupImage.textContent = eventTarget;
    
    


}

function hide(){
    popupBackground.style.display = 'none';
    popupImage.style.display = 'none';
}

xButton.addEventListener('click',hide);

for (let item of boxes){
    item.addEventListener('click',show);
}

