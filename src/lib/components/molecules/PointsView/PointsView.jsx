import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Progress, Button, List, Tag } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CharacterActions from '@redux/actions/characterActions';

function PointsView({ attribute, pb, increaseAttr, decreaseAttr, recalcModifiers, updateSkills }) {
	const [_skills, setSkills] = useState([]);
	const [_actualPoints, setActualPoints] = useState(0);

	useEffect(() => {
		setActualPoints(attribute.value);
		setSkills(attribute['skills']);
	},[attribute]);

	useEffect(() => {
		if(_skills.length > 0)
			updateSkills(attribute, _skills);
	}, [_skills]);

	const percentage = (_actualPoints * 100) / 20;

	const onClickSkill = ({ label, value }) => {
		setSkills(_skills.map(skill => {
			if(skill.label === label) {
				return {
					label, 
					value,
					hasProef: !skill.hasProef
				};
			}
			return skill;
		}));
	};
	
	const SkillPoint = (hasProef) => {
		return hasProef ? attribute['modifier'] + pb : attribute['modifier'];
	};

	if(!attribute){
		return false;
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
							{`${attribute.label} ${_actualPoints}`}
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
						onClick={() => {
							decreaseAttr(attribute);
							recalcModifiers();
						}}
					/>
					<Button
						type="danger"
						icon={<PlusOutlined />}
						onClick={() => {
							increaseAttr(attribute);
							recalcModifiers();
						}}
					/>
				</Button.Group>
			</div>
			<br />
			{_skills && (
				<div>
					<List
						dataSource={_skills}
						renderItem={(skill) => {
							return (
								<List.Item  
									style={{display:'flex', justifyContent: 'space-between'}}
								>
									<span style={{color: 'white'}}>{skill.label}</span>
									<Tag 
										color={skill.hasProef && 'gold'}
										onClick={() => onClickSkill(skill)}
									>
										{SkillPoint(skill.hasProef)}
									</Tag>
								</List.Item>
							);
						}}
					/>
				</div>
			)}
		</Card>
	);
}

PointsView.propTypes = {
	attribute: PropTypes.object,
	pb: PropTypes.number,
	increaseAttr: PropTypes.func,
	decreaseAttr: PropTypes.func,
	recalcModifiers: PropTypes.func,
	updateSkills: PropTypes.func
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(CharacterActions, dispatch);

export default connect(null, mapDispatchToProps)(PointsView);