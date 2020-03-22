import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Avatar, Button, Divider } from 'antd';
import { useHistory } from 'react-router-dom';

const { Header, Content } = Layout;

function Page({ children }) {
	const history = useHistory();

	return (
		<div className='page'>
			<Layout>
				<Header
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between'
					}}
				>	
					<div>
						<Avatar 
							style={{
								verticalAlign: 'middle'
							}}
							src="https://4.bp.blogspot.com/-F9APkMzFDp0/W9ClSG5sxCI/AAAAAAAAG9s/8UWJhxigrX4l4NsMVWTEsjZ2YdJWAWkZwCLcBGAs/s1600/BENTLEY.jpg"
							size="large"
						/> 
						<Button
							style={{verticalAlign: 'middle', marginLeft: 5 }}
							type="danger"
							size="small"
						>
							Varis Holimion
						</Button>
					</div>
					<div style={{textAlign: 'right'}}>
						<Button 
							type="danger"
							onClick={() => history.push('/')}
						>
							Home
						</Button>
						<Divider 
							type="vertical"
						/>
						<Button 
							type="danger"
							onClick={() => history.push('/inventory')}
						>
							Inventory
						</Button>
						
					</div>
				</Header>
				<Content style={{height:'100vh'}}>
					{ children }
				</Content>
			</Layout>
		</div>
	);
}

Page.propTypes = {
	children: PropTypes.object
};

export default Page;
