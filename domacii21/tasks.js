if (localStorage.getItem('loggedIn') !== 'true') {
	window.location.replace('index.html');
}

let taskList = document.querySelector('.tasks-list');
let taskInput = document.getElementById('taskName');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

document.getElementById('createTask').addEventListener('click', function () {
	let name = taskInput.value.trim();

	if (!name) return;

	let task = {
		id: Date.now(),
		name: name,
	};

	tasks.push(task);
	localStorage.setItem('tasks', JSON.stringify(tasks));

	taskInput.value = '';
	showTasks();
});

function showTasks() {
	taskList.innerHTML = '';

	let ol = document.createElement('ol');

	for (let task of tasks) {
		let li = document.createElement('li');

		let row = document.createElement('div');
		row.className = 'task-row';

		let span = document.createElement('span');
		span.textContent = task.name;

		let button = document.createElement('button');
		button.textContent = 'Obriši';
		button.dataset.id = task.id;

		row.append(span);
		row.append(button);
		li.append(row);
		ol.append(li);
	}

	ol.addEventListener('click', function (e) {
		if (e.target.tagName === 'BUTTON') {
			const id = Number(e.target.dataset.id);

			tasks = tasks.filter((task) => task.id !== id);
			localStorage.setItem('tasks', JSON.stringify(tasks));

			showTasks();
		}
	});

	taskList.append(ol);
}

showTasks();
