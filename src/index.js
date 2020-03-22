import React from 'react';
import ReactDOM from 'react-dom';
import App from '@app';

const main = document.getElementById('main');

const Appplication = () => {
	return (
		<App />
	);
};

ReactDOM.render(<Appplication />, main);

