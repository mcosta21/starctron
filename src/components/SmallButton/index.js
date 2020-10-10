import React from 'react';
import { Button } from './styles';

function SmallButton(props){
    return (
        <Button onClick={() => props.onClick !== undefined && props.onClick()}>{props.children}</Button>
    )    
}

export default SmallButton;