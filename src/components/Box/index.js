import React from 'react';
import { Container } from './styles';

function Box({ children, grid, height, flexDirection}){
    return (
        <Container grid={grid} height={height} flexDirection={flexDirection}>
            {children}
        </Container>
    )    
}

export default Box;