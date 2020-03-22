import React from 'react';
import {Row, Card, Col, Descriptions, Table} from 'antd';
import PointsView from '../../molecules/PointsView/PointsView';

function Details() {
	return (
		<Row justify="space-between">
			<Col md={9}>
				<Card>
					<Descriptions size="small" column={2}>
						<Descriptions.Item label="Raça">
							Elfo Negro (Drow)
						</Descriptions.Item>
						<Descriptions.Item label="Classe">
							Druida
						</Descriptions.Item>
						<Descriptions.Item label="Antecedente">
							-
						</Descriptions.Item>
						<Descriptions.Item label="Alinhamento">
							-
						</Descriptions.Item>
						<Descriptions.Item label="Nome do jogador">
							Dário
						</Descriptions.Item>
						<Descriptions.Item label="Inspiração">
							0
						</Descriptions.Item>
						<Descriptions.Item label="Bonus de proeficiencia">
							0
						</Descriptions.Item>
						<Descriptions.Item label="Classe da armadura">
							0
						</Descriptions.Item>
						<Descriptions.Item label="Iniciativa">
							0
						</Descriptions.Item>
					</Descriptions>
					<hr></hr>

					<Row>
						<Col>
							<PointsView label="Pv. Total" actualPoints={10} />
						</Col>
						<Col>
							<PointsView label="Pv. atual" actualPoints={10}/>
						</Col>
					</Row>
				</Card>
			</Col>
			<Col md={14}>
				<Card>
					<Descriptions size="small" column={2}>
						<Descriptions.Item label="Traços de Personalidade">
							-
						</Descriptions.Item>
						<Descriptions.Item label="Ideais">
							-
						</Descriptions.Item>
						<Descriptions.Item label="Vinculos">
							-
						</Descriptions.Item>
						<Descriptions.Item label="Fraquezas">
							-
						</Descriptions.Item>
						<Descriptions.Item label="Caracteristicas & talentos">
							-
						</Descriptions.Item>
						<Descriptions.Item label="Dados de vida">
							1d8
						</Descriptions.Item>
					</Descriptions>

					<Row>
						<Col>
							<Table
								style={{color: 'white'}}
								columns={[
									{
										key: 'name',
										dataIndex: 'name',
										title: 'Name'
									},
									{
										key: 'value',
										dataIndex: 'value',
										title: 'Value'
									},
									
								]}
								dataSource={[
									{
										name:'Força',
										value: 0
									},
									{
										name:'Destreza',
										value: 0
									},
									{
										name:'Constituição',
										value: 0
									},
									{
										name:'Inteligencia',
										value: 0
									},
									{
										name:'Sabedoria',
										value: 0
									},
									{
										name:'Carisma',
										value: 0
									}
								]}
							>

							</Table>
						</Col>
					</Row>
				</Card>
			</Col>
		</Row>
	);
}

export default Details;