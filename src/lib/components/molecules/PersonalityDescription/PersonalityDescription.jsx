import React from 'react';
import { Descriptions } from 'antd';

function PersonalityDescription(personalityProps) {
	return (
		<Descriptions size="small" column={2}>
			<Descriptions.Item label="Traços de Personalidade">
				{ personalityProps.personalityTraits }
			</Descriptions.Item>
			<Descriptions.Item label="Ideais">
				{ personalityProps.ideals }
			</Descriptions.Item>
			<Descriptions.Item label="Vinculos">
				{ personalityProps.bonds }
			</Descriptions.Item>
			<Descriptions.Item label="Fraquezas">
				{ personalityProps.flaws }
			</Descriptions.Item>
			<Descriptions.Item label="Caracteristicas & talentos">
				{ personalityProps.featuresAndTraits }
			</Descriptions.Item>
			<Descriptions.Item label="Dados de vida">
				{ personalityProps.hitDice }
			</Descriptions.Item>
		</Descriptions>
	);
}

export default PersonalityDescription;
