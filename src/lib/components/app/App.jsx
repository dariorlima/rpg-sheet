import React from 'react';
import Main from '@pages/Main';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import '@styles/index.sass';
import Inventory from '@pages/Inventory';

function App() {

	return (
		<Router>
			<Switch>
				<Route path='/' exact>
					<Main />
				</Route>
				<Route path='/inventory' exact>
					<Inventory />
				</Route>
			</Switch>
		</Router>
		
	);
}

export default App;