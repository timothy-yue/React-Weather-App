import React from 'react';
import styled from 'styled-components';

const Navbar = styled.header`
	height: 50px;
	background-color: transparent;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 30px;
`;

const NavBarHeaderText = styled.h2`
	margin: 0;
	border: 2px solid #abf;
	padding: 13px;
	color: white;
`;

const MobileNavbar = styled.header`
	height: 50px;
	background-color: transparent;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 30px;
	margin-bottom: 5vh;
`;

const MobileNavBarHeaderText = styled.h2`
    margin: 0; 
    border: 2px solid #abf;
    padding: 13px;
    color: white
    margin-bottom: 10px;
`;

export function NavHeader(props) {
	return (
		<Navbar>
			<NavBarHeaderText>React Weather App</NavBarHeaderText>

			{props.location.lat && props.location.long ? (
				<h4 style={{ margin: 0, color: 'white' }}>
					Location: {props.location.lat.toFixed(4)} , {props.location.long.toFixed(4)}
				</h4>
			) : (
				''
			)}
		</Navbar>
	);
}

export function MobileNavHeader(props) {
	return (
		<MobileNavbar>
			<MobileNavBarHeaderText>React Weather App</MobileNavBarHeaderText>

			{props.location.lat && props.location.long ? (
				<h4 style={{ margin: 0, color: 'white' }}>
					Location: {props.location.lat.toFixed(4)} , {props.location.long.toFixed(4)}
				</h4>
			) : (
				''
			)}
		</MobileNavbar>
	);
}
