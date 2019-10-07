import React from 'react';
import { Link } from 'react-router-dom';
import './PetCard.css';

export default class PetCard extends React.Component {
    render() {
        let pet = this.props.pet;
        return <>
            <section className="pet-card">
                <Link to={'/pet/'+pet.slug} alt={pet.mainPicture.alt}>
                    <img alt={pet.mainPicture.alt} src={pet.mainPicture.url} />
                </Link>
                <div>
                    <h3>{pet.name}</h3>
                    <p>Raça: {pet.breed}</p>
                    <p>Gênero: {pet.sex === 'male' ? 'Macho' : 'Fêmea'}</p>
                </div>
            </section>
        </>;
    }
}