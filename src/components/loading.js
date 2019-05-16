import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const Loadingbar = styled.div`
	border: 16px solid #f3f3f3; /* Light grey */
	border-top: 16px solid #3498db; /* Blue */
	border-radius: 50%;
	width: 120px;
	height: 120px;
	animation: ${spin} 2s linear infinite;
`;

const Container = styled.div`
	width: 80%;
	margin: auto;
	text-align: center;
	display: flex;
	justify-content: center;
`;

export default function Loading() {
	return (
		<Container>
			<Loadingbar />
		</Container>
	);
}
