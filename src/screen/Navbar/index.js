import React from 'react';
import {Container} from './styles';
import Logo from '../../assets/logo.png';

function Navbar() {

    return (
        <Container>  
          <div className="logo">
            <img src={Logo} alt="Reactron"/>
          </div>
        </Container>
    )
}

export default Navbar;