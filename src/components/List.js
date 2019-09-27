import React from 'react';
import axios from 'axios';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            error: null,
            isLoaded: false
        }
    }

    componentDidMount() {
        axios.get('https://gui-pets.herokuapp.com/api/' + this.props.type + '/?' + this.props.queries)
            .then(response => {
                this.setState({ isLoaded: true, items: response.data });
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
                <p>Temos a lista.</p>
            </>;
        }
    }
}