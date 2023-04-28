const todoArray = [];
let todoId = 1;

function formSubmission() {
	const todoTextElement = document.getElementById('todoText');

	if (todoTextElement.value.length == 0) {
		// Do not allow empty messages on the todo list.
		return;
	}

	const todoItem = createTodoItem(todoTextElement.value);
	todoArray.push(todoItem);

	displayTodoList();

	todoTextElement.value = '';
}

function displayTodoList() {
	// Get the UL element and clear it.
	const ul = document.querySelector('ul');
	ul.innerHTML = '';

	// Add li elements for each todo item.
	const template = todoArray.map(item => `
		<li>
			${item.text}
		</li>
		`);

	ul.innerHTML = template.join('');
}

function createTodoItem(todoText) {
	const todoItem = {id: todoId, text: todoText};
	todoId++;

	return todoItem;
}