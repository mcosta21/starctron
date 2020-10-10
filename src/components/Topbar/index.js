import React, { useContext } from 'react';

import { Container, Column } from './styles';
import userIcon from '../../assets/user.png';
import { FiMail, FiBell } from 'react-icons/fi';
import SmallButton from '../SmallButton';
import Separator from '../Separator';
import { LoginContext } from '../../contexts/LoginContext';

function Topbar(props){

    const context = useContext(LoginContext);

    return (
        <Container>
            <Column>
                <Separator width={20}/>
                <h4>{props.name}</h4>
            </Column>
            <Column>
                <SmallButton><FiMail size={18}/></SmallButton>
                <Separator width={15}/>
                <SmallButton><FiBell size={18}/></SmallButton>
                <Separator width={15}/>
                <div className="content-user">
                    <img src={context.login.photo === undefined ? userIcon : context.login.photo } alt="User"/>
                    <div/>
                    <span>{context.login.username}</span>
                </div>
            </Column>
            
        </Container>
    )    
}

export default Topbar;