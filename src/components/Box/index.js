import React from 'react';
import { Container } from './styles';

function Box({ children, flexDirection}){
    return (
        <Container flexDirection={flexDirection}>
            {children}
        </Container>
    )    
}

export default Box;