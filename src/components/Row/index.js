import React from 'react';
import { Container } from './styles';

function Row(props){
    return (
        <Container width={props.width} height={props.height}>
            {props.children}
        </Container>
    )    
}

export default Row;