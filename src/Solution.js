import React, { Component } from "react";
import Styled from "styled-components";
const Style = Styled.div`
width:100%;
font-family:var(--code);
margin:10px 0;
border-radius:15px;
background:white;
box-shadow:0 0 10px 2px rgb(0,0,0,0.1);
font-family:var(--code);
padding:10px;
overflow:auto;


`;

export default class Solution extends Component {
	render() {
		return <Style className='Solution'>{this.props.solution}</Style>;
	}
}
