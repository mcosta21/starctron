import React from 'react';
import { Switch } from './styles';

function SwitchButton(props){

    let check = props.value === undefined ? false : props.value;

    return (
        <Switch>
            <input type="checkbox" checked={check} onChange={() => props.onClick !== undefined && props.onClick()}/>
            <span className="slider"></span>
        </Switch>
    )    
}

export default SwitchButton;