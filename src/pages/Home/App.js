import React from 'react';
import './App.css';

import Nav from '../../components/Nav';
import List from '../../components/List';

function App() {
    return <>
		<Nav></Nav>
		<div className="App">
			<List type="announcements" queries="situation=lost"/>
		</div>
    </>;
}

export default App;
