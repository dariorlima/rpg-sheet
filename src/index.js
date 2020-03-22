import React from 'react';
import ReactDOM from 'react-dom';
import App from '@app';
import { Provider } from 'react-redux';
import store from './lib/redux/store';

const main = document.getElementById('main');

const Appplication = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

ReactDOM.render(<Appplication />, main);

