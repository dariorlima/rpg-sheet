import React from 'react';
import PropTypes from 'prop-types';
import {Row, Card, Col} from 'antd';
import { connect } from 'react-redux';
import CharacterDescription from '../../molecules/CharacterDescription/CharacterDescription';
import PersonalityDescription from '../../molecules/PersonalityDescription';
import SavingThrowsTable from '../../molecules/SavingThrowsTable/SavingThrowsTable';

function Details({ character }) {
	return (
		<Row justify="space-between">
			<Col md={9}>
				<Card>
					<CharacterDescription 
						{...character}
					/>
					<hr />

				</Card>
			</Col>
			<Col md={14}>
				<Card>
					
					<PersonalityDescription 
						{...character}
					/>

					<Row>
						<Col>
							
							<SavingThrowsTable 
								character={character}
							/>
							
						</Col>
					</Row>
				</Card>
			</Col>
		</Row>
	);
}

Details.propTypes = {
	character: PropTypes.object
};

const mapStateToProps = state => ({
	character: state.character
});

export default connect(mapStateToProps)(Details);