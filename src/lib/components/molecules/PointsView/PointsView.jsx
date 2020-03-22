import React from 'react';
import PropTypes from 'prop-types';
import { Card, Progress, Button, List, Tag } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

function PointsView({ actualPoints, label, pericies }) {

	return (
		<Card style={{ textAlign: 'center' }}>
			<div>
				<Progress
					percent={actualPoints}
					type={'circle'}
					style={{
						color: 'white'
					}}
					format={() =>
						<span style={{ color: 'white' }}>{label}</span>
					}
				/>
			</div>
			<br />
			<div >
				<Button.Group>
					<Button
						type="danger"
						icon={<MinusOutlined />}
					/>
					<Button
						type="danger"
						icon={<PlusOutlined />}
					/>
				</Button.Group>
			</div>
			<br />
			{pericies && (
				<div>
					<List
						dataSource={pericies}
						renderItem={(item) => {
							return (
								<List.Item  
									style={{display:'flex', justifyContent: 'space-between'}}
								>
									<span style={{color: 'white'}}>{item.label}</span>
									<Tag color={item.value !== '-' && 'gold'}>{item.value}</Tag>
								</List.Item>
							)
						}}
					/>
				</div>
			)}
		</Card>
	);
}

PointsView.propTypes = {
	actualPoints: PropTypes.number,
	label: PropTypes.string,
	pericies: PropTypes.array
};

PointsView.defaultValues = {
	actualPoints: 0
};

export default PointsView;