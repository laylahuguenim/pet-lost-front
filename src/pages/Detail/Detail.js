import React from 'react';
// import './Detail.css';
import PetDetail from '../../components/PetDetail';

import Nav from '../../components/Nav';

function Detail(props) {
  	return <>
	  	<Nav />
      	<p>Página do pet de id: {props.match.params.id}!</p>
		<PetDetail numId={props.match.params.id}/>
  	</>;
}

export default Detail;
