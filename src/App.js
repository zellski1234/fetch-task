// import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";


const App = () => {

	return (
		<div className="App">
			
				
				<BrowserRouter>
					<SpecialDiv>
						<SpecialHeading>Popular Anime Website</SpecialHeading>
						{/* nav bar will get rendered on every page and NavLink is our styled component Link is the normal link imported from react-router-dom */}
						<nav>
							<NavLink to="/">Home</NavLink>
							<NavLink to="/about">About</NavLink>
							<NavLink to="/contact">Contact</NavLink>
						</nav>
					</SpecialDiv>
					{/* the Route is the url path and what component to render when the url is visited */}
					<Routes>
						<Route path="/" element={ <Home /> } />
						<Route path="/about" element={ <About /> } />
						<Route path="/contact" element={ <Contact /> } />
					</Routes>
				</BrowserRouter>

				<BigFoot>
	
				</BigFoot>
			
		</div>
	);
}





export default App;

const SpecialHeading = styled.h1`
	display: flex;
	justify-content: center;
	color: white;
	padding: 10px 30px 20px 30px;
	font-size: 35px;
	font-weight: 900;
`
const SpecialDiv = styled.div`
	margin-bottom: 50px;
	padding: 30px 30px 0px 30px;
	width: 100vw;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background: rgb(214,103,29);
	background: radial-gradient(circle, rgba(214,103,29,1) 12%, rgba(248,150,86,1) 95%);

	nav{
		display: flex;
		width: 100vw;
		background: rgb(48,48,48);
		background: radial-gradient(circle, rgba(48,48,48,1) 24%, rgba(19,19,19,1) 74%);
		justify-content: center;
		height: 60px;
		margin: 0px;
		align-items: center;
	}
`

const NavLink = styled(Link)`
    background: transparent;
    padding: 12px 25px;
    margin: 10px;
	text-decoration: none;
	color: #eee;
	font-size: 20px;
	font-weight: 900;
	transition: 1s;

	&:hover{
		cursor: pointer;
		color: #ddd;
		background-color: #4A4A4A;
	}
`

const BigFoot = styled.div`
	display: table-row;
	background: rgb(48,48,48);
	background: radial-gradient(circle, rgba(48,48,48,1) 24%, rgba(19,19,19,1) 74%);
	color: gray;
	outline: #131313;
	padding: 50px;
	width: 100vw;
	margin-top: 40px
`