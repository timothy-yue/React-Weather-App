import React from 'react';
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

export default function SummaryCard(props) {
	const iconCollection = {
		rain: <WiDayRain size={150} color="#abf" />,
		'partly-cloudy-night': <WiDayLightWind size={150} color="#fff" />,
		'partly-cloudy-day': <WiCloudy size={150} color="#fff" />,
		'clear-day': <WiDaySunny size={150} color="#ff0" />,
		'clear-night': <WiNightClear size={150} color="#fff" />,
		snow: <WiSnow size={150} color="#fff" />,
		sleet: <WiSleet size={150} color="#fff" />,
		wind: <WiDayWindy size={150} color="#fff" />,
		fog: <WiFog size={150} color="#fff" />,
		cloudy: <WiCloudy size={150} color="#fff" />
	};

	return (
		<div className="summary-card">
			<div className="summary-card-wrapper">
				<div className="content">
					{iconCollection[props.summary.icon]}
					<div className="summary-card-body">
						<h5 style={{ marginBottom: '12px', marginTop: '12px' }}>
							<em style={{ border: '1px solid white', padding: '4px' }}>TODAY'S SUMMARY</em>
						</h5>
						{props.summary.summary}
					</div>
				</div>
			</div>
		</div>
	);
}
