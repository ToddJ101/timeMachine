import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/counter';
// import Clock from '../routes/counter';
// import Profile from '../routes/profile';

const App = () => (
	<div id="app">
		{/* <Header /> */}
		<Router>
			<Home path="/" />
			{/* <Clock path="/clock/" /> */}
			{/* <Profile path="/profile/" user="me" />
			<Profile path="/profile/:user" /> */}
		</Router>
	</div>
)

export default App;
