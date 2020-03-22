import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Main from '@pages/Main';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CharacterActions from '@redux/actions/characterActions';
import '@styles/index.sass';
import Inventory from '@pages/Inventory';

function App({ loadCharacter }) {

	useEffect(()=> {
		loadCharacter();
	},[]);

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

App.propTypes = {
	loadCharacter: PropTypes.func
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(CharacterActions, dispatch);

export default connect(null, mapDispatchToProps)(App);