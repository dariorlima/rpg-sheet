import React from 'react';
import { Descriptions } from 'antd';

function CharacterDescription(charProps) {
	return (
		<Descriptions size="small" column={2}>
			<Descriptions.Item label="Raça">
				{charProps.race}
			</Descriptions.Item>
			<Descriptions.Item label="Classe">
				{charProps.class}
			</Descriptions.Item>
			<Descriptions.Item label="Antecedente">
				{charProps.background}
			</Descriptions.Item>
			<Descriptions.Item label="Alinhamento">
				{charProps.alignment}
			</Descriptions.Item>
			<Descriptions.Item label="Nome do jogador">
                Dário
			</Descriptions.Item>
			<Descriptions.Item label="Inspiração">
				{charProps.inspiration}
			</Descriptions.Item>
			<Descriptions.Item label="Bonus de proeficiencia">
				{charProps.proficiencyBonus}
			</Descriptions.Item>
			<Descriptions.Item label="Classe da armadura">
				{charProps.armorClass}
			</Descriptions.Item>
			<Descriptions.Item label="Iniciativa">
				{charProps.iniciative}
			</Descriptions.Item>
		</Descriptions>
	);
}

export default CharacterDescription;
