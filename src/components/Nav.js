import React from 'react';
// import './Nav.css';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return <header>
            <nav>
                <h1><Link to="/">PetLost</Link></h1>
                <ul>
                    <li><Link to="#" disabled>Desaparecidos</Link></li>
                    {/* <li><Link to="/found">Encontrados</Link></li> */}
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/pet/1">Pet 1</Link></li>
                </ul>
            </nav>
        </header>;
    }
}

export default Nav;