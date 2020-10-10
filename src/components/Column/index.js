import React from 'react';
import { Container } from './styles';

function Column(props){
    return (
        <Container width={props.width} height={props.height}>
            {props.children}
        </Container>
    )    
}

export default Column;