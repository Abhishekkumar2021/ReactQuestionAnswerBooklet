import React, { Component } from "react";
import Styled from "styled-components";
const Style = Styled.div`
width:100%;
padding:10px;
font-family:var(--code);
margin:10px 0;
border-radius:15px;
background:white;
box-shadow:0 0 10px 2px rgb(0,0,0,0.1);

`;

export default class Solution extends Component {
	render() {
	
		return <Style className="Solution">{this.props.solution}</Style>;
	}
}
