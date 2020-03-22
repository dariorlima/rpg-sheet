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
                            label={`${hability.label}`} 
							pericies={hability.pericies}
							actualPoints={hability.value}
						/>
					</Col>
				);
			})}
		</Row>
	);
}

export default Habilities;
