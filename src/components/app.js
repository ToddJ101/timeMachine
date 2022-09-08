import { h } from 'preact';
import { Router } from 'preact-router';

// Code-splitting is automated for `routes` directory
import Header from './header';
import Home from './home';
import Clock from './counter';
import Stopwatch from './stopwatch';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Clock path="/clock" />
			<Stopwatch path="/stopwatch" />
		</Router>
	</div>
)

export default App;
