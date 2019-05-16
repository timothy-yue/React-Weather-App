import React from 'react';
import { WiDayLightWind, WiDayRain, WiCloudy } from 'weather-icons-react';

import styled, { keyframes } from 'styled-components';

export default function SummaryCard(props) {
	return (
		<div className="summary-card">
			<div className="summary-card-wrapper">
				<div className="content">
					<WiDayRain size={100} color="#000" />
					<div className="summary-card-body">{props.summary.summary}</div>
				</div>
			</div>
		</div>
	);
}
