import React, { Component } from 'react';
import WeatherCard from './weatherCard';

// import { API_URL } from '../../config';
import { TEST_DATA } from '../../fallback';

import { NavHeader, MobileNavHeader } from '../navHeader';
import Loading from '../loading';

import FlipCard from '../FlipCard';

export default class Weather extends Component {
	constructor(props) {
		super(props);
		this.state = {
			location: {
				lat: '',
				long: ''
			},
			locationAval: false,
			useFallBackData: false,
			daily: [],
			width: 0,
			height: 0
		};
	}

	updateWindowDimensions = () => {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	};

	componentDidMount() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((pos) => {
				this.setState({
					location: {
						lat: pos.coords.latitude,
						long: pos.coords.longitude
					},
					locationAval: true
				});
			});
		} else {
			console.log('GeoLocation not supported / provided');
		}
		this.setState({
			daily: TEST_DATA.daily
		});
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	render() {
		return (
			<React.Fragment>
				{this.state.width > 600 ? (
					<NavHeader location={this.state.location} />
				) : (
					<MobileNavHeader location={this.state.location} />
				)}
				{this.state.locationAval ? (
					<div className="container">
						<div className="weatherCard-wrapper">
							{this.state.daily.data ? (
								this.state.daily.data.map((a, index) => <WeatherCard key={index} day={a} />)
							) : (
								<div />
							)}
						</div>
					</div>
				) : (
					<Loading />
				)}
				{this.state.height > 810 && this.state.locationAval ? (
					// <div className="summary-container">
					// 	<SummaryCard summary={this.state.daily} />
					// </div>
					<FlipCard summary={this.state.daily} />
				) : (
					''
				)}
			</React.Fragment>
		);
	}
}
