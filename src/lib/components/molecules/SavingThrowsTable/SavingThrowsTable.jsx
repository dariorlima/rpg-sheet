import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

function SavingThrowsTable({ character }) {

	const [savingThrows, setSavingThrows] = useState([]);

	useEffect(()=> {
		const { saving_throws } = character;
		setSavingThrows(saving_throws);
	},[character]);

	if(!character) return false;

	return (
		<Table
			bordered
			style={{ color: 'white' }}
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
			dataSource={savingThrows.map(st => {
				return {
					name: st.name,
					value: character['attributes'][st.key]['modifier']
				};
			})}
		/>
	);
}

SavingThrowsTable.propTypes = {
	character: PropTypes.object
};

export default SavingThrowsTable;