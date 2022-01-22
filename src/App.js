import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Ques from "./Ques";

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Router>
					<Ques number={1} problem='' solution='' />
					<Ques number={2} problem='' solution='' />
					<Ques number={3} problem='' solution='' />
					<Ques number={4} problem='' solution='' />
					<Ques number={5} problem='' solution='' />
					<Ques number={6} problem='' solution='' />
					<Ques number={7} problem='' solution='' />
					<Ques number={8} problem='' solution='' />
					<Ques number={9} problem='' solution='' />
					<Ques number={10} problem='' solution='' />
				</Router>
			</div>
		);
	}
}

export default App;
