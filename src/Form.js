import React, { Component } from "react";
import Styled from "styled-components";
const Style = Styled.div`
width:100%;
display:flex;
flex-direction: column;
align-items:center;
textarea{
    width:100%;
    height:600px;
    border:none;
    outline:none;
    resize:none;
    box-shadow: 0px 0px 10px rgb(0,0,0,0.1);
    margin:10px 0;
    border-radius:20px;
    padding: 20px 25px;
    font-size:16px;font-family:var(--code);
}

 button{
     background:white;
      box-shadow: 0px 0px 10px 2px rgb(0,0,0,0.1);
    padding:15px 40px;
    border-radius:50px;
    outline:none;
    transition:0.3s ease all;
    margin:10px;
    border:none;
    
}
button:active{
    transform:scale(0.9);
}

`;
class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			disabled: false,
		};
		this.onChange = this.onChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	onChange(evt) {
		this.props.edit(evt.target.value);
	}
	handleClick(evt) {
		this.setState({ disabled: !this.state.disabled });
	}
	render() {
		return (
			<Style>
				<textarea
					defaultValue={this.props.solution}
					onChange={this.onChange}
					disabled={this.state.disabled}></textarea>
				<button onClick={this.handleClick}>
					{this.state.disabled ? "Edit more" : "Done"}
				</button>
			</Style>
		);
	}
}
export default Form;
