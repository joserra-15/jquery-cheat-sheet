//DOM Loaded
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById("domLoadedVanilla").innerHTML = `<p>Document Loaded</p>`});

// HTML item has been clicked
document.getElementById("itemClickedVanilla").addEventListener('click',()=>{
  let number = parseInt(document.querySelector('#itemClickedVanilla span').textContent);
  document.querySelector('#itemClickedVanilla span').textContent = `${++number}`;
})

//HTML item has been double clicked
document.getElementById("itemDbClickedVanilla").addEventListener('dblclick',()=>{
  let number = parseInt(document.querySelector('#itemDbClickedVanilla span').textContent);
  document.querySelector('#itemDbClickedVanilla span').textContent = `${++number}`;
})

//The user presses a key on the keyboard
document.addEventListener('keypress', (e)=>{
  document.querySelector('#keyPressedVanilla span').textContent = e.key;
})

//The user moves the mouse cursor
document.getElementById('itemMouseMoveVanilla').addEventListener('mousemove', (e)=>{
  const text = `You move the mouse in position x=${e.x} and y=${e.y}`
  document.querySelector('#itemMouseMoveVanilla p').textContent = text;
})

//The user changes a value of an text input
document.querySelector('#changeValueInputVanilla input').addEventListener('input', (e)=>{
  document.querySelector('#changeValueInputVanilla p').textContent = e.target.value;
})

//Image is loaded
document.querySelector('#imageLoadedVanilla img').addEventListener('load', ()=>{
  document.getElementById("imageLoadedVanilla").insertAdjacentHTML('beforeend', `<p>Image Loaded</p>`);
})

//Image fails to load
document.querySelector('#imageFailsLoadVanilla img').addEventListener('error', (e)=>{
  document.getElementById("imageFailsLoadVanilla").insertAdjacentHTML('beforeend', `<p>Image Fails Load</p>`);
})

//Form is submitted
document.querySelector('#formSubmitVanilla form').addEventListener('submit', (e)=>{
  e.preventDefault();
  alert("Form send succesfull");
})

//The user changes the option of a select element
document.querySelector('#changeSelectOptionVanilla select').addEventListener('change', (e)=>{
  document.querySelector('#changeSelectOptionVanilla span').textContent = e.target.value;
})

//Position the mouse over an element
document.getElementById('itemMouseOverPositionVanilla').addEventListener('mouseover', (e)=>{
  const text = `You move the mouse in position x=${e.x} and y=${e.y}`
  document.querySelector('#itemMouseOverPositionVanilla p').textContent = text;
})

//Checkbox is checked or unchecked
document.querySelector('#checkboxCheckedVanilla input').addEventListener('click', (e)=>{
  if(e.target.checked){
    document.querySelector('#checkboxCheckedVanilla span').textContent = 'checked';
  }else{
    document.querySelector('#checkboxCheckedVanilla span').textContent = 'unchecked';
  }
})

//Ul list item is clicked, show the item that was clicked
document.querySelector('#clickUlItemVanilla ul').addEventListener('click', (e)=>{
  document.querySelector('#clickUlItemVanilla span').textContent = e.target.textContent;
})