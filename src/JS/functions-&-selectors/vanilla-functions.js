//Create an HTML element with any text value
document.querySelector('#createElementTextVanilla button').addEventListener('click', (e)=>{
  e.preventDefault();
  const elementVanilla = document.createElement('P');
  elementVanilla.textContent = 'text';
  document.getElementById('createElementTextVanilla').appendChild(elementVanilla);
})


//Remove an HTML element with any text value
document.querySelector('#removeElementTextVanilla button').addEventListener('click', (e)=>{
  e.preventDefault();
  document.querySelector('#removeElementTextVanilla p').remove()
})

//Append an HTML element with any text value to a parent element
document.querySelector('#appendElementTextVanilla button').addEventListener('click', (e)=>{
  e.preventDefault();
  const elementVanilla = document.createElement('P');
  elementVanilla.textContent = 'append element';
  document.getElementById('appendElementTextVanilla').appendChild(elementVanilla);
})

//Prepend an HTML element with any text value to a parent element
document.querySelector('#prependElementTextVanilla button').addEventListener('click', (e)=>{
  e.preventDefault();
  const elementVanilla = document.createElement('P');
  elementVanilla.textContent = 'prepend element';
  document.getElementById('prependElementTextVanilla').prepend(elementVanilla);
})

//Create and add an HTML element with any text value after another element
document.querySelector('#afterElementTextVanilla button').addEventListener('click', (e)=>{
  e.preventDefault();
  const elementVanilla = document.createElement('P');
  elementVanilla.textContent = 'after element';
  document.getElementById('afterVanilla').after(elementVanilla);
})

//Create and add an HTML element with any text value before another element
document.querySelector('#beforeElementTextVanilla button').addEventListener('click', (e)=>{
  e.preventDefault();
  const elementVanilla = document.createElement('P');
  elementVanilla.textContent = 'before element';
  document.getElementById('beforeVanilla').before(elementVanilla);
})

//Clone an HTML element within other element
document.querySelector('#cloneElementVanilla button').addEventListener('click', (e) => {
  e.preventDefault();
  const elementClonated = document.querySelector('.elementToCloneVanilla').cloneNode(true);
  document.querySelector('#cloneElementVanilla').appendChild(elementClonated);
})

//Add a class to an HTML item
document.querySelector('#addClassItemVanilla button').addEventListener('click', (e)=>{
  e.preventDefault();
  document.querySelector('#addClassItemVanilla p').classList.add('border-and-Background');
})

//Remove a class to an HTML item
document.querySelector('#removeClassItemVanilla button').addEventListener('click', (e)=>{
  e.preventDefault();
  document.querySelector('#removeClassItemVanilla p').classList.remove('border-and-Background');
})

//Toggle a class of an HTML item
document.querySelector('#toggleClassItemVanilla button').addEventListener('click', (e)=>{
  e.preventDefault();
  document.querySelector('#toggleClassItemVanilla p').classList.toggle('border-and-Background');
})

//Add a disabled attribute to an HTML button
document.querySelector('#disabledButtonVanilla button').addEventListener('click', e =>{
  e.preventDefault();
  e.target.disabled = "true";
})

//Remove the disabled attribute of an HTML button
document.querySelector('#removeDisabledButtonVanilla button').removeAttribute('disabled');

//Set a data-src attribute to a img element
document.querySelector('#setDataSrcImgVanilla img').setAttribute('data-src', 'https://www.freepik.es/vector-gratis/ilustracion-icono-dibujos-animados-hamburguesa-queso_11787888.htm');

//Remove the data-src attribute of the img element
document.querySelector('#removeDataSrcImgVanilla img').removeAttribute('data-src');

//Hide an HTML element on click
document.querySelector('#hideItemVanilla button').addEventListener('click', (e)=>{
  e.preventDefault();
  document.querySelector('#hideItemVanilla p').style.display = "none";
})

//Show an HTML element on click
document.querySelector('#showItemVanilla button').addEventListener('click', (e)=>{
  e.preventDefault();
  document.querySelector('#showItemVanilla p').style.display = "block";
})

//Iterate a collection of elements and apply a change of style on them
document.querySelector('#iterateItemsVanilla button').addEventListener('click', (e)=>{
  e.preventDefault();
  document.querySelectorAll('#iterateItemsVanilla p')
    .forEach(element=>element.classList.add('border-and-Background'));
})

//Get the parent element of a certain element and change its font weight
document.querySelector('#getParentChangeFontWeightVanilla span').addEventListener('click', (e)=>{
  e.preventDefault();
  e.target.parentElement.style.fontWeight = 'bold';
})

//Get the collection of children of a certain element and change its font weight
document.querySelector('#iterateChildrenVanilla button').addEventListener('click', (e)=>{
  e.preventDefault();
  const childrens = document.querySelector('#iterateChildrenVanilla div').children;
  for(element of childrens){
    element.style.fontWeight = 'bold';
  }
})

//Get all the elements that have a certain class and change their font weight
document.querySelector('#selectItemClasesVanilla button').addEventListener('click', (e)=>{
  e.preventDefault();
  document.querySelectorAll('#selectItemClasesVanilla .border-and-Background')
    .forEach(element=>{element.style.fontWeight = 'bold';})
})

//Get an item by id and change its font weight
document.getElementById('getByIdFontWeightVanilla').style.fontWeight = 'bold';

//Get all the elements that have a certain class and the display property of none and change their font color
document.querySelector('#classAndDisplayNoneVanilla button').addEventListener('click', (e)=>{
  e.preventDefault();
  document.querySelectorAll('#classAndDisplayNoneVanilla .border-and-Background')
    .forEach(element=>{
      if(window.getComputedStyle(element).getPropertyValue('display') === "none"){
        element.style.color = 'blue';
        element.classList.remove('hide');
      }
    })
})

//Get the options of a select element that are selected
document.querySelector('#getSelectOptionVanilla span').textContent = document.querySelector('#getSelectOptionVanilla select').value;

//Change the href attribute of the first <a> element
document.querySelectorAll('#changeHrefFirstVanilla a')[0].setAttribute('href','https://www.google.com/');

//Show an alert with the value of the first <input> of the page
document.querySelector('#showAlertInputVanilla button').addEventListener('click', (e)=>{
  e.preventDefault();
  alert(document.querySelector('#showAlertInputVanilla input').value)
})

//Remove all items from a specific selector
document.querySelector('#removeAllSameSelectorVanilla button').addEventListener('click', (e)=>{
  e.preventDefault();
  document.querySelectorAll('#removeAllSameSelectorVanilla li').forEach(element=>element.remove())
})

//Animate an item after 2 seconds from the initial page load
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('animateLoadPageVanilla').animate([
    // keyframes
    { transform: 'translateX(230%)' },
  ], {
    // timing options
    duration: 5000,
    delay: 2000,
    fill: "forwards"
  })
})