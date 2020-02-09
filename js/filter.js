const liElement = document.getElementsByTagName('li');

for(let i = 0; i < liElement.length; i++){
    // textContent can get all html and all values/ yl tae vlues in page to display
    // console.log(liElement[i].textContent);
    console.log(liElement[i].innerText);
}