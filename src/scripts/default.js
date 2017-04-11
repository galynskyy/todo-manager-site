var TodoModule = (function() {
	var _init = function() {
		_loadTasks();
		_eventListeners();
	};

	var _eventListeners = function() {
		inputElement.addEventListener("keypress", _handleAdd);
		removeAllTasks.addEventListener("click", _removeAllTasks);
	};

	var _hideMessage = function() {
		var message = document.querySelector(".app__item._message");

		if(message) {
			listTasks.removeChild(message);
		}
	};

	var _showMessage = function() {
		var message = document.querySelector(".app__item._message");

		if(!message) {
			var message = document.createElement("li");
			message.className = "app__item _message";
			message.innerHTML = "Нет задач";
			listTasks.innerHTML = "";
			listTasks.appendChild(message);
		}
	};

	var _removeAllTasks = function() {
		var isDelete = confirm("Вы действительно хотите удалить все задачи?");

		if(isDelete) {
			var xhr = new XMLHttpRequest();

			xhr.open("POST", "/ajax/removeAllTasks.php", true);
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
					try {
		                var data = JSON.parse(xhr.responseText);
		            } catch(err) {
		                console.log(err.message + " in " + xhr.responseText);
		                return;
		            }

		            if(!data) {
		            	alert("Fail delete records");
		            }

		            _showMessage();
	            }
			};
			xhr.send();
		}
	};

	var _loadTasks = function() {
		var xhr = new XMLHttpRequest();

		xhr.open("POST", "/ajax/getTasks.php", true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				try {
	                var data = JSON.parse(xhr.responseText);
	            } catch(err) {
	                console.log(err.message + " in " + xhr.responseText);
	                return;
	            }
	            
	            if(Object.keys(data).length == 0) {
	            	var message = document.createElement("li");
					message.className = "app__item _message";
					message.innerHTML = "Нет задач";

					listTasks.appendChild(message);
	            } else {
	            	for (key in data) {
		            	var message = document.createElement("li");

						message.className = "app__item";
						message.innerHTML = data[key]["text"];

						listTasks.appendChild(message);
	            	}
	            }
            }
		};
		xhr.send();
	};

	var _handleAdd = function(event) {
		if(!/^\s*$/.test(event.target.value) && (event.keyCode || event.which) === 13) {
			_addTask(event);
		}
	};

	var _addTask = function(element) {
		_hideMessage();
		var newTask = document.createElement("li");

		newTask.className = "app__item";
		newTask.innerHTML = element.target.value;

		listTasks.appendChild(newTask);

		_saveTask(element);

		element.target.value = "";
	};

	var _saveTask = function(element) {
		var xhr = new XMLHttpRequest();
		var data = "text=" + encodeURIComponent(element.target.value);

		xhr.open("POST", "/ajax/sendTask.php", true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				try {
	                var data = JSON.parse(xhr.responseText);
	            } catch(err) {
	                console.log(err.message + " in " + xhr.responseText);
	                return;
	            }
            }
		};
		xhr.send(data);
	};

	return {
		init: _init
	};
})();


var inputElement = document.querySelector(".app__input");
var listTasks = document.querySelector(".app__list");
var removeAllTasks = document.querySelector(".app__span._trash");

removeAllTasks && listTasks && inputElement && TodoModule.init();