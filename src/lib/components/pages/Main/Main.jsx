import React from 'react';

import Page from '@templates/Page';
import { PageHeader } from 'antd';
import Details from '@organisms/Details';
import Habilities from '@organisms/Habilities';

function Main() {
	return (
		<Page>
			<PageHeader >
				<Details />
				<br />
				<Habilities />
			</PageHeader>
		</Page>
	);
}

export default Main;
