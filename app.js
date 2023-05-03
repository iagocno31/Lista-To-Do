const form = document.querySelector('form');
const input = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', deleteItem);

function addItem(event) {
  event.preventDefault();
  const newItem = document.createElement('li');
  const itemText = document.createElement('span');
  itemText.textContent = input.value;
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.innerHTML += `<img height= 20px src="./img/LIXEIRA.png">`;
  newItem.appendChild(itemText);
  newItem.appendChild(deleteBtn);
  itemList.appendChild(newItem);
  input.value = '';
}

function deleteItem(event) {
  if (event.target.tagName === 'BUTTON') {
    const li = event.target.parentElement;
    itemList.removeChild(li);
  }
}
