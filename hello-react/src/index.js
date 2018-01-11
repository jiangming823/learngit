import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import home from './containers/home';
import detail from './containers/detail';
import list from './containers/list';
import notFound from './containers/notFound';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route path='/home' component={home} />
			<Route path='/list' component={list} />
			<Route path='/detail' component={detail} />
		</div>
	</BrowserRouter >,
	document.getElementById('root')
);
