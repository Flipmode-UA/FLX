let itemCount = document.getElementById('todolist').children.length;
const maxItems = 10;
let addNewAction = document.getElementById('add_new_action');
let addItemTrigger = document.getElementById('add_item_trigger');
let textInput = addNewAction.value;
let toDoList = document.getElementById('todolist');
console.log(addItemTrigger)

function inputCheck() {
	if (addNewAction.value !== '' && itemCount <= maxItems) {
		addItemTrigger.removeAttribute('disabled');
	} else {
		addItemTrigger.setAttribute('disabled', 'disabled');
	}
}

function addListItem() {
	let toDoListItem = document.createElement('li');
	toDoListItem.setAttribute('draggable', 'true');
	toDoList.appendChild(toDoListItem);
}

addItemTrigger.onclick = addListItem();