import React from 'react';
import Moment from 'react-moment';
import {
	WiDayLightWind,
	WiDayRain,
	WiCloudy,
	WiSnow,
	WiDaySunny,
	WiSleet,
	WiFog,
	WiDayWindy,
	WiNightClear
} from 'weather-icons-react';

export default function WeatherCard(props) {
	const iconCollection = {
		rain: <WiDayRain size={200} color="#abf" />,
		'partly-cloudy-night': <WiDayLightWind size={200} color="#fff" />,
		'partly-cloudy-day': <WiCloudy size={200} color="#fff" />,
		'clear-day': <WiDaySunny size={200} color="#ff0" />,
		'clear-night': <WiNightClear size={200} color="#fff" />,
		snow: <WiSnow size={200} color="#fff" />,
		sleet: <WiSleet size={200} color="#fff" />,
		wind: <WiDayWindy size={200} color="#fff" />,
		fog: <WiFog size={200} color="#fff" />,
		cloudy: <WiCloudy size={200} color="#fff" />
	};

	return (
		<div className="weather-card">
			<div className="weather-card-wrapper">
				<div className="card-header">{iconCollection[props.day.icon]}</div>
				<div className="card-body">
					<h5 className="no-margin">
						<Moment format="dddd - MM/DD/YYYY" unix>
							{props.day.time}
						</Moment>
					</h5>
					<p>
						<strong>High Temperature: </strong>
						<em>{props.day.temperatureHigh}</em>&#8457;
					</p>
					<p>
						<strong>Low Temperature: </strong>
						<em>{props.day.temperatureLow}</em>&#8457;
					</p>
					<p>
						<strong>Wind Speed: </strong>
						<em>{props.day.windSpeed} mph</em>
					</p>
					<p>
						<strong>Summary: </strong>
						<em>{props.day.summary}</em>
					</p>
				</div>
			</div>
		</div>
	);
}
