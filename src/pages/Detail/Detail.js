import React from 'react';
// import './Detail.css';

import Nav from '../../components/Nav';

function Detail(props) {
  	return <>
	  	<Nav />
      	<p>Página do pet de id: {props.match.params.id}!</p>
  	</>;
}

export default Detail;
