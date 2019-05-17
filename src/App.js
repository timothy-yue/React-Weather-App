import React, { Component } from 'react';
import './App.css';

import Weather from './components/weather-wrapper/weather';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			location: {
				lat: '',
				long: ''
			},
			locationAval: false
		};
	}

	render() {
		return (
			<React.Fragment>
				<div className="App">
					<Weather location={this.state.location} />
					<div className="hover-here">Hover Here</div>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
