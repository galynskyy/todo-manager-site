var TodoModule = (function() {
	var _init = function() {
		_showMessage();
		_eventListeners();
	};

	var _eventListeners = function() {
		inputElement.addEventListener("keypress", _handleAdd);
	};

	var _checkTasksList = function() {
		
	}

	var _showMessage = function() {
		var messageBlock = document.querySelector(".app__item._message");
		
		if(listTasks.children.length < 1) {
			var message = document.createElement("li");

			message.className = "app__item _message";
			message.innerHTML = "Нет задач";

			listTasks.appendChild(message);
		} else {
			if(messageBlock) {
				listTasks.removeChild(messageBlock);
			}
		}
	}

	var _handleAdd = function(event) {
		if((event.keyCode && event.which) === 13) {
			_addTask(event);
		}
	};

	var _addTask = function(element) {
		_showMessage();

		var newTask = document.createElement("li");

		newTask.className = "app__item";
		newTask.innerHTML = element.target.value;

		listTasks.appendChild(newTask);

		_saveTask(element);

		element.target.value = "";
	}

	var _saveTask = function(element) {
		var storageTasks = localStorage.getItem("tasks");
		var items = [];

		items.push(
			id: 1,
			text: element.target.value
		);

		console.log(items);
	}

	return {
		init: _init
	};
})();


var inputElement = document.querySelector(".app__input");
var listTasks = document.querySelector(".app__list");

listTasks && inputElement && TodoModule.init();