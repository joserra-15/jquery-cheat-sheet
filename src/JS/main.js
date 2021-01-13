const buttonEvent=document.getElementById('buttonEvents');
const buttonFunctions=document.getElementById('buttonFunctions');

const showOrHiddeDisplay = (e) => {
  e.preventDefault();
  e.target.classList.toggle('bxs-right-arrow');
  e.target.classList.toggle('bxs-down-arrow');
  if(e.target.id === "buttonEvents"){
    document.getElementById('events').classList.toggle('hide');
  }else if(e.target.id === "buttonFunctions"){
    document.getElementById('functions').classList.toggle('hide');
  }
}
buttonEvent.addEventListener('click',showOrHiddeDisplay);
buttonFunctions.addEventListener('click',showOrHiddeDisplay);