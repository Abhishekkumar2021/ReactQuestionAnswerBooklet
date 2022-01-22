import React, { Component } from "react";
import Styled from "styled-components";
const Style = Styled.textarea`
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


`;

export default class Solution extends Component {
	render() {
		return (
			<Style className='Solution' disabled='true'>
				{this.props.solution}
			</Style>
		);
	}
}
