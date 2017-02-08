import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
	render() {
    	return (
    		<div class="app">
				<h1 class="app__title">TODO</h1>

				<div class="app__form">

					<div class="app__task">
						<input class="app__input" type="text" placeholder="Что нужно сделать?" />
					</div>

					<div class="app__sort">
						<a class="app__link" href="#">Все</a>
						<a class="app__link" href="#">Сделать</a>
						<a class="app__link" href="#">Выполнено</a>
						<span class="app__span _trash"></span>
					</div>

					<div class="app__list">
						<p class="app__message">Пусто...</p>
					</div>

				</div>
			</div>
    	)
  	}
}

export default App;