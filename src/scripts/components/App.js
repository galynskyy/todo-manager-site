import React, {Component} from "react";

import Form from "./Form.js";

class App extends Component {
	render() {
		return (
			<div className="app">
				<h1 className="app__title">TODO</h1>
				<Form />
			</div>
		);
	}
}

export default App;