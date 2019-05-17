import React from 'react';
import SummaryCard from '../summaryCard';

import './flip.css';

export default function FlipCard(props) {
	return (
		<React.Fragment>
			<div className="flip-card">
				<div className="flip-card-inner">
					<div className="flip-card-front" />
					<div className="flip-card-back">
						<SummaryCard summary={props.summary} />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
