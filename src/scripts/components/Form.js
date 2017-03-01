import React, {Component} from "react";

class Form extends Component {

	/*constructor(props) {
		super(props);

		this.state = {

		}
	}*/

	showAll() {
		var message = document.getElementById("app__message");
		message.innerHTML = "showAll";
	}

	showDoing() {
		var message = document.getElementById("app__message");
		message.innerHTML = "showDoing";
	}

	showComplete() {
		var message = document.getElementById("app__message");
		message.innerHTML = "showComplete";
	}

	render() {
		return (
			<div className="app__form">
				<div className="app__task">
					<input className="app__input" type="text" placeholder="Что нужно сделать?" />
				</div>
				<div className="app__sort">
					<a className="app__link" href="#" onClick={this.showAll}>Все</a>
					<a className="app__link" href="#" onClick={this.showDoing}>Сделать</a>
					<a className="app__link" href="#" onClick={this.showComplete}>Выполнено</a>
					<span className="app__span _trash"></span>
				</div>
				<div className="app__list">
					<p className="app__message" id="app__message">Пусто...</p>
				</div>
			</div>
		);
	}
}

export default Form;
