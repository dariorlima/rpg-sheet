import React from 'react';
import {  equipamentsColumns, itemsColumns } from './columns';
import { Table, PageHeader, Card } from 'antd';

function InventoryTable() {
	return (
		<PageHeader>
			<Card>
				<Table 
					columns={equipamentsColumns} 
					dataSource={[
						{
							name: 'Cimitarra',
							attack: '',
							deffense: ''
						}
					]} 
				/>
			</Card>
		
			<br />
			<Card>
				<Table 
					columns={itemsColumns} 
					dataSource={[
						{
							name:  '',
							quantity: '',
						}
					]} 
				/>
			</Card>
		</PageHeader>
	);
}

export default InventoryTable;