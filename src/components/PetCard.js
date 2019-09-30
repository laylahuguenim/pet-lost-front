import React from 'react';
import './PetCard.css';

export default class PetCard extends React.Component {
    render() {
        let pet = this.props.pet;
        return <>
            <section className="pet-card">
                <img alt={pet.mainPicture.alt} src={pet.mainPicture.url} />
                <div>
                    <h3>{pet.name}</h3>
                    <p>Raça: {pet.breed}</p>
                    <p>Gênero: {pet.sex === 'male' ? 'Macho' : 'Fêmea'}</p>
                </div>
            </section>
        </>;
    }
}