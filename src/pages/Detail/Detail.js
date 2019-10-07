import React from 'react';
// import './Detail.css';
import PetDetail from '../../components/PetDetail';

import Nav from '../../components/Nav';

function Detail(props) {
  	return <>
	  	<Nav />
      	<p>Página do pet de slug: {props.match.params.slug}!</p>
		<PetDetail slug={props.match.params.slug}/>
  	</>;
}

export default Detail;
