//Create an HTML element with any text value
$('#createElementTextJquery button').on('click', (e)=>{
  e.preventDefault();
  const elementJquery = $(`<p>text</p>`);
  $('#createElementTextJquery').append(elementJquery);
})

//Remove an HTML element with any text value
$('#removeElementTextJquery button').on('click', (e)=>{
  e.preventDefault();
  $('#removeElementTextJquery p').remove()
})

//Append an HTML element with any text value to a parent element
$('#appendElementTextJquery button').on('click', (e)=>{
  e.preventDefault();
  const elementJquery = $(`<p>append element</p>`);
  $('#appendElementTextJquery').append(elementJquery);
})

//Prepend an HTML element with any text value to a parent element
$('#prependElementTextJquery button').on('click', (e)=>{
  e.preventDefault();
  const elementJquery = $(`<p>prepend element</p>`);
  $('#prependElementTextJquery').prepend(elementJquery);
})

//Create and add an HTML element with any text value after another element
$('#afterElementTextJquery button').on('click', (e)=>{
  e.preventDefault();
  const elementJquery = $(`<p>after element</p>`);
  $('#afterJquery').after(elementJquery);
})

//Create and add an HTML element with any text value before another element
$('#beforeElementTextJquery button').on('click', (e)=>{
  e.preventDefault();
  const elementJquery = $(`<p>before element</p>`);
  $('#beforeJquery').before(elementJquery);
})

//Clone an HTML element within other element
$('#cloneElementJquery button').on('click', (e) => {
  e.preventDefault();
  const elementClonated = $('.elementToCloneJquery').clone();
  $('#cloneElementJquery').append(elementClonated);
})

//Add a class to an HTML item
$('#addClassItemJquery button').on('click', (e)=>{
  e.preventDefault();
  $('#addClassItemJquery p').addClass('border-and-Background');
})

//Remove a class to an HTML item
$('#removeClassItemJquery button').on('click', (e)=>{
  e.preventDefault();
  $('#removeClassItemJquery p').removeClass('border-and-Background');
})

//Toggle a class of an HTML item
$('#toggleClassItemJquery button').on('click', (e)=>{
  e.preventDefault();
  $('#toggleClassItemJquery p').toggleClass('border-and-Background');
})

//Add a disabled attribute to an HTML button
$('#disabledButtonJquery button').on('click', function(e){
  e.preventDefault();
  $(this).attr('disabled',true);
})

//Remove the disabled attribute of an HTML button
$('#removeDisabledButtonJquery button').removeAttr('disabled');

//Set a data-src attribute to a img element
$('#setDataSrcImgJquery img').data('src', 'https://www.freepik.es/vector-gratis/ilustracion-icono-dibujos-animados-hamburguesa-queso_11787888.htm');
$('#setDataSrcImgJquery img').attr('data-src', 'https://www.freepik.es/vector-gratis/ilustracion-icono-dibujos-animados-hamburguesa-queso_11787888.htm');

//Remove the data-src attribute of the img element
$('#removeDataSrcImgJquery img').removeData('src');
$('#removeDataSrcImgJquery img').removeAttr('data-src');

//Hide an HTML element on click
$('#hideItemJquery button').on('click', (e)=>{
  e.preventDefault();
  $('#hideItemJquery p').hide();
})

//Show an HTML element on click
$('#showItemJquery button').on('click', (e)=>{
  e.preventDefault();
  $('#showItemJquery p').show();
})

//Fade in an HTML element using jQuery
$('#fadeInItemJquery button').on('click', (e)=>{
  console.log("pulsado")
  e.preventDefault();
  $('#fadeInItemJquery p').fadeIn();
})

//Fade out an HTML element using jQuery
$('#fadeOutItemJquery button').on('click', (e)=>{
  console.log("pulsado")
  e.preventDefault();
  $('#fadeOutItemJquery p').fadeOut();
})

//Iterate a collection of elements and apply a change of style on them
$('#iterateItemsJquery button').on('click', (e)=>{
  e.preventDefault();
  $('#iterateItemsJquery p').each((index,element)=>$(element).addClass('border-and-Background'));
})

//Get the parent element of a certain element and change its font weight
$('#getParentChangeFontWeightJquery span').on('click', function(e){
  e.preventDefault();
  $(this).parent().css('fontWeight', 'bold');
})

//Get the collection of children of a certain element and change its font weight
$('#iterateChildrenJquery button').on('click', (e)=>{
  e.preventDefault();
  $('#iterateChildrenJquery div').children().each((index,element)=>$(element).css('fontWeight', 'bold'));
})

//Get all the elements that have a certain class and change their font weight
$('#selectItemClasesJquery button').on('click', (e)=>{
  e.preventDefault();
  $('#selectItemClasesJquery .border-and-Background')
    .each((index,element)=>$(element).css('fontWeight', 'bold'))
})

//Get an item by id and change its font weight
$('#getByIdFontWeightJquery').css('fontWeight', 'bold');

//Get all the elements that have a certain class and the display property of none and change their font color
$('#classAndDisplayNoneJquery button').on('click', (e)=>{
  e.preventDefault();
  $('#classAndDisplayNoneJquery .border-and-Background:hidden')
    .each((index,element)=>$(element).css('color', 'blue').show())
})

//Get the options of a select element that are selected
$('#getSelectOptionJquery span').text($('#getSelectOptionJquery select option:selected').val());

//Change the href attribute of the first <a> element
$('#changeHrefFirstJquery a').first().attr('href','https://www.google.com/');

//Show an alert with the value of the first <input> of the page
$('#showAlertInputJquery button').on('click', (e)=>{
  e.preventDefault();
  alert($('#showAlertInputJquery input').val())
})

//Remove all items from a specific selector
$('#removeAllSameSelectorJquery button').on('click', (e)=>{
  e.preventDefault();
  $('#removeAllSameSelectorJquery li').each((index,element)=>$(element).remove())
})

//Animate an item after 2 seconds from the initial page load
$(function(){
  $('#animateLoadPageJquery').delay(2000).animate({height:'100px'}, 5000);
})