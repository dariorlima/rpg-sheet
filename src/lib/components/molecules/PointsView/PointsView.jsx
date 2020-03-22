import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Progress, Button, List, Tag } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

function PointsView({ actualPoints, label, pericies }) {
	const [_pericies, setPericies] = useState(pericies);
	const [_actualPoints, setActualPoints] = useState(actualPoints);


	const percentage = (_actualPoints * 100) / 20;

	const pericyClick = ({ label, ...rest }) => {
		setPericies(_pericies.map(p => {
			if(p.label === label) {
				return {
					...rest,
					label, 
					hasProef: !p.hasProef
				}
			}
			return p;
		}))

	}
	
	const calc = (value, hasProef) => {
		const rest = () => {
			const _rest = (value - 10) / 2;

			return _rest > 0 ? Math.floor(_rest): _rest;
		}

		return hasProef ? rest() + 2 : rest();
	}

	return (
		<Card style={{ textAlign: 'center' }}>
			<div>
				<Progress
					percent={percentage}
					type={'circle'}
					style={{
						color: 'white'
					}}
					format={() =>
						<span style={{ color: 'white' }}>
							{`${label} ${_actualPoints}`}
						</span>
					}
				/>
			</div>
			<br />
			<div >
				<Button.Group>
					<Button
						type="danger"
						icon={<MinusOutlined />}
						onClick={() => setActualPoints(_actualPoints - 1)}
					/>
					<Button
						type="danger"
						icon={<PlusOutlined />}
						onClick={() => setActualPoints(_actualPoints + 1)}
					/>
				</Button.Group>
			</div>
			<br />
			{_pericies && (
				<div>
					<List
						dataSource={_pericies}
						renderItem={(item) => {
							return (
								<List.Item  
									style={{display:'flex', justifyContent: 'space-between'}}
								>
									<span style={{color: 'white'}}>{item.label}</span>
									<Tag 
										color={item.hasProef && `gold`}
										onClick={() => pericyClick(item)}
									>
										{calc(_actualPoints, item.hasProef)}
									</Tag>
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