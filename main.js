const addButton = document.getElementById('myButton');
const listNode = document.getElementById('myList');

addButton.addEventListener('click', () => {
    let textInput = document.getElementById('inputText').value;
    let liElement = document.createElement('li');
    let newList = document.createTextNode(textInput);
    liElement.appendChild(newList);

    if(textInput === '' ? alert('please type something') : listNode.appendChild(liElement))

    document.getElementById('inputText').value = '';

    let spanElement = document.createElement('span');
    let icons = document.createElement('i');
    icons.className ='fa-solid fa-trash';
    spanElement.className = 'close';
    spanElement.appendChild(icons);
    liElement.appendChild(spanElement);

    spanElement.addEventListener('click', function() {
        let div = this.parentElement;
        div.style.display = 'none';
    });
})