import React from 'react';
import { Container } from './styles';

function Title({ size, children }){
    return (
        <Container size={size}>
            {children}
        </Container>
    )    
}

export default Title;