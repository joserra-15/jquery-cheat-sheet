//DOM Loaded
$(function(){
  $("#domLoadedJquery").append(`<p>Document Loaded</p>`)
})

// HTML item has been clicked
$('#itemClickedJquery').on('click',function(){
  let number = parseInt($('#itemClickedJquery span').text());
  $('#itemClickedJquery span').text(`${++number}`);
})

//HTML item has been double clicked
$('#itemDbClickedJquery').on('dblclick',function(){
  let number = parseInt($('#itemDbClickedJquery span').text());
  $('#itemDbClickedJquery span').text(`${++number}`);
})

//The user presses a key on the keyboard
$(document).on('keypress', (e)=>{ $('#keyPressedJquery span').text(e.key) })

//The user moves the mouse cursor
$('#itemMouseMoveJquery').on('mousemove', (e)=>{
  $('#itemMouseMoveJquery p').text(`You move the mouse in position x=${e.originalEvent.x} and y=${e.originalEvent.y}`);
})

//The user changes a value of an text input
$('#changeValueInputJquery input').on('input', function(){
  $('#changeValueInputJquery p').text($(this).val());
})

//Image is loaded
$('#imageLoadedJquery img').on('load', ()=>{
  $("#imageLoadedJquery").append(`<p>Image Loaded</p>`);
})

//Image fails to load
$('#imageFailsLoadJquery img').on('error', ()=>{
  $("#imageFailsLoadJquery").append(`<p>Image Fails Load</p>`);
})

//Form is submitted
$('#formSubmitJquery form').on('submit', (e)=>{
  e.preventDefault();
  alert("Form send succesfull");
})

//The user changes the option of a select element
$('#changeSelectOptionJquery select').on('change', function(){
  $('#changeSelectOptionJquery span').text($(this).val());
})

//Position the mouse over an element
$('#itemMouseOverPositionJquery').on('mouseover', (e)=>{
  $('#itemMouseOverPositionJquery p').text(`You move the mouse in position x=${e.originalEvent.x} and y=${e.originalEvent.y}`);
})

//Checkbox is checked or unchecked
$('#checkboxCheckedJquery input').on('click', function(){
  if($(this).prop('checked')){
    $('#checkboxCheckedJquery span').text('checked');
  }else{
    $('#checkboxCheckedJquery span').text('unchecked');
  }
})

//Ul list item is clicked, show the item that was clicked
$('#clickUlItemJquery ul').on('click', (e)=>{
  $('#clickUlItemJquery span').text($(e.target).text());
})