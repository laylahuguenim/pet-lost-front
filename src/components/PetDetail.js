import React from 'react';
import axios from 'axios';

export default class PetDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: {},
            error: null,
            isLoaded: false
        }
    }

    componentDidMount() {
        axios.get('https://gui-pets.herokuapp.com/api/pets/' + this.props.numId)
            .then(response => {
                this.setState({ isLoaded: true, pet: response.data });
                console.log(response.data);
            })
            .catch(error => {this.setState({ isLoaded: true, error })});
    }

    render() {
        const { error, isLoaded, pet } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return <>
                <img src={pet.mainPicture.url} alt={pet.mainPicture.alt}/>
                <h1>{pet.name}</h1>
                <h3>{pet.description}</h3>
                <p>{pet.breed}, {pet.sex}</p>
            </>;
        }
    }
}