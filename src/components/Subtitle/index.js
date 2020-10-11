import React from 'react';
import { Container } from './styles';

function Subtitle({ size, color, children }){
    return (
        <Container size={size} color={color}>
            {children}
        </Container>
    )    
}

export default Subtitle;