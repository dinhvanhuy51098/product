import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './style.css';
import './search.css';
import { createStore } from 'redux';
import myReducer from './reducers/index';
import { Provider } from 'react-redux';

const store=createStore(
	myReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={ store } >
		<App />
	</Provider>,	
	document.getElementById('root')
);