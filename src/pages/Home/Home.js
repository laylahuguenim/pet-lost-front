import React from 'react';
import './App.css';

import Nav from '../../components/Nav';
import List from '../../components/List';

function App() {
    return <>
		<Nav/>
		<div className="App">
			<List type="pets" queries="active=true" title="Precisando de ajuda"/>
		</div>
    </>;
}

export default App;
