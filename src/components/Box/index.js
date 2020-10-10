import React from 'react';
import { Container } from './styles';

function Box({ children }){
    return (
        <Container>
            {children}
        </Container>
    )    
}

export default Box;