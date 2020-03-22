import React from 'react';

import Page from '@templates/Page';
import { PageHeader } from 'antd';
import Details from '@organisms/Details';
import Attributes from '@organisms/Attributes';

function Main() {
	return (
		<Page>
			<PageHeader >
				<Details />
				<br />
				<Attributes />
			</PageHeader>
		</Page>
	);
}

export default Main;
