import React from 'react';
import { Row, Col } from 'antd';
import PointsView from '@molecules/PointsView';
import { habilitiesMap } from '@root/constants/habilities';

function Habilities() {
	return (
		<Row justify='space-around'>
			{habilitiesMap.map(hability => {
				return (
					<Col md={4} key={hability.key}>
						<PointsView 
                            label={`${hability.label} ${hability.value}`} 
                            pericies={hability.pericies}
							actualPoints={(hability.value * 100) / 20}
						/>
					</Col>
				);
			})}
		</Row>
	);
}

export default Habilities;
