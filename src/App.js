import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import AppLayout from 'Layout/Layout';
import MainPage from 'pages/MainPage';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<AppLayout>
					<Switch>
						<Route path="/" exact component={MainPage} />
					</Switch>
				</AppLayout>
			</BrowserRouter>
		);
	}
}

export default App;
