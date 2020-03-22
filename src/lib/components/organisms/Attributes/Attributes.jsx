import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import PointsView from '@molecules/PointsView';

function Attributes({ character }) {
	return (
		<Row justify='space-around'>
			{
				Object.keys(character.attributes).map(attr => (
					<Col md={4} key={attr}>
						<PointsView
							attribute={{
								key: attr,
								...character.attributes[attr]
							}}
							pb={character.proficiencyBonus}
						/>
					</Col>
				))
			}
		</Row>
	);
}

Attributes.propTypes = {
	character: PropTypes.object
};

const mapStateToProps = state => ({
	character: state.character
});

export default connect(mapStateToProps)(Attributes);
