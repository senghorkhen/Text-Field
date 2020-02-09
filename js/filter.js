const liElement = document.getElementsByTagName('li');

for(let i = 0; i < liElement.length; i++){
    // textContent can get all html and all values/ yl tae vlues in page to display
    // console.log(liElement[i].textContent);
}

// onFilterInput or onKyePress
function onFilterInput(){
    // let resultValue = document.getElementById('inputFieldId').value;
    let inputElement = document.querySelector('input');
    let filter = inputElement.value.toUpperCase();
    console.log(filter);
}
document.addEventListener('keypress',onFilterInput);