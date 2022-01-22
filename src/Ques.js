import React, { Component } from "react";
import Styled from "styled-components";
import { Route, Routes, Link } from "react-router-dom";
import Solution from "./Solution";
import Hide from "./Hide";
import Form from "./Form";
const Style = Styled.div`
border-top:5px solid skyblue;
position:relative;
        width:800px;
        min-height:600px;
        max-width:96%;
        padding:15px 20px;
        border-radius:20px;
        box-shadow:0px 3px 5px rgb(0,0,0,0.1);
        background:white;
        transition:0.3s ease all;
        margin:15px;
        display:flex;
        align-items:center;
        flex-direction:column;
        &:hover{
            box-shadow:0px 5px 10px rgb(0,0,0,0.1);
            .number{
                transform:scale(1.1);
            }
        }
        .text{
            width:100%;
            flex-grow:1;
        }
        .links{
            display:flex;
            justify-content:space-between;
            width:100%;
            
        }
        .number{
            background:skyblue;
            color:white;
            width:300px;
            transition:0.3s ease all;
            border-radius:10px;
            font-size:24px;
            padding:5px 0;
            display:flex;
            justify-content:center;
            align-items:center;
            margin-bottom:8px;
            span{
                padding:0 10px;
                font-size:32px;
                color:white;
                font-family:var(--code);
                
            }
        }
        a{
            
            border:2px solid skyblue;
            padding:15px 20px;
            border-radius:50px;
            text-decoration:none;
            transition:0.3s ease all;
            margin:10px;
        }
        a:hover{
            background:skyblue;
            color:white;
        }
        a:active{
            transform:scale(0.9);
        }
    `;
class Ques extends Component {
	constructor(props) {
		super(props);
		this.state = {
			solution: localStorage.getItem("sol") || this.props.solution,
		};
		this.handleEdit = this.handleEdit.bind(this);
	}

	handleEdit(value) {
		this.setState({ solution: value });
		localStorage.setItem("sol", value);
	}
	render() {
		const props = this.props;
		const solution = this.state.solution;
		return (
			<Style className='Ques'>
				<div className='number'>
					Question no. <span>{props.number}</span>
				</div>
				<div className='text'>{props.problem}</div>
				<Routes>
					<Route
						exact
						path={`/show/${props.number}`}
						element={<Solution solution={solution} />}></Route>
					<Route
						exact
						path={`/hide/${props.number}`}
						element={<Hide />}></Route>
					<Route
						exact
						path={`/edit/${props.number}`}
						element={
							<Form solution={solution} edit={this.handleEdit} />
						}></Route>
				</Routes>
				<div className='links'>
					<Link exact='true' to={`/show/${props.number}`}>
						Explore solution
					</Link>
					<Link exact='true' to={`/hide/${props.number}`}>
						Hide solution
					</Link>
					<Link exact='true' to={`/edit/${props.number}`}>
						Edit solution
					</Link>
				</div>
			</Style>
		);
	}
}
export default Ques;
