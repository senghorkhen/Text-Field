// onFilterInput or onKyePress
function onFilterInput(){
    let inputElement = document.querySelector('input');
    let filter = inputElement.value.toUpperCase();
    let textValue;
    // console.log(filter);
    const liElement = document.getElementsByTagName('li');
    for(let i = 0; i < liElement.length; i++){
        textValue = liElement[i].textContent.toUpperCase() || liElement[i].innerText.toUpperCase();
        // console.log(liElement[i].textContent);
        // liElement[i].textContent.toUpperCase().indexOf(filter);
        // console.log(liElement[i].textContent.toUpperCase());
        console.log(textValue.indexOf(filter));
    }
}
document.addEventListener('keypress',onFilterInput);