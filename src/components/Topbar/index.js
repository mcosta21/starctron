import React, { useContext, useEffect, useState } from 'react';
import { Container, Column } from './styles';
import userIcon from '../../assets/user.png';
import { FiMail, FiBell } from 'react-icons/fi';
import SmallButton from '../SmallButton';
import Separator from '../Separator';
import { LoginContext } from '../../contexts/LoginContext';
import { ThemeContext} from '../../contexts/ThemeContext';
import SwitchButton from '../../components/SwitchButton';
import { lightTheme, darkTheme } from '../../styles/theme';

function Topbar(props){

    const contextLogin = useContext(LoginContext);
    const contextTheme = useContext(ThemeContext);
    const themeName = contextTheme.theme.theme.name;
    const [stateTheme, setStateTheme] = useState(themeName === 'light' ? true : false);

    useEffect(() => {
        setStateTheme(themeName === 'light' ? true : false)
    }, [themeName]);

    function handleChangeTheme(){
        setStateTheme(!stateTheme);
        if(stateTheme){
            contextTheme.setTheme({ theme: darkTheme});
        }
        else {
            contextTheme.setTheme({ theme: lightTheme});
        }
    }

    return (
        <Container>
            <Column>
                <Separator width={20}/>
                <h4>{props.name}</h4>
            </Column>
            <Column>
                
                <SwitchButton onClick={handleChangeTheme} value={stateTheme}/>
                <Separator width={15}/>

                <SmallButton><FiMail size={18}/></SmallButton>
                <Separator width={15}/>

                <SmallButton><FiBell size={18}/></SmallButton>
                <Separator width={15}/>

                <div className="content-user">
                    <img src={contextLogin.login.photo === undefined ? userIcon : contextLogin.login.photo } alt="User"/>
                    <div/>
                    <span>{contextLogin.login.username}</span>
                </div>
            </Column>
            
        </Container>
    )    
}

export default Topbar;