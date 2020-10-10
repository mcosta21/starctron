import React, { useState } from 'react';
import { Container, LogoBar, Options, Footer } from './styles';
import logoStarctron from '../../assets/logo-starctron.png';
import iconStarctron from '../../assets/icon-starctron.png';
import { Link } from 'react-router-dom';
import { FiGrid, FiLayers, FiLogOut, FiBook, FiCalendar, FiMessageSquare, FiAlignLeft } from 'react-icons/fi';
import { FaUser, FaHome } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri'
import { ImListNumbered } from 'react-icons/im';
import SmallButton from '../SmallButton';

function Menu(props){

    const [openFooterMenu, setOpenFooterMenu] = useState(false)

    const options = [
        {
            title: 'Home',
            link: '/home',
            icon: <FaHome size={20}/> // Put a Icon Component here
        },
        {
            title: 'Layout',
            link: '/layout',
            icon: <FiGrid size={20}/> // Put a Icon Component here
        },
        {
            title: 'Menu Items',
            link: '/menuitems',
            icon: <ImListNumbered size={20}/> // Put a Icon Component here
        },
        {
            title: 'Page 1',
            link: '/page1',
            icon: <FiLayers size={20}/> // Put a Icon Component here
        },
        {
            title: 'Page 2',
            link: '/page2',
            icon: <FiLayers size={20}/> // Put a Icon Component here
        },
        {
            title: 'Page 3',
            link: '/page3',
            icon: <FiLayers size={20}/> // Put a Icon Component here
        },
        {
            title: 'Page 4',
            link: '/page4',
            icon: <FiLayers size={20}/> // Put a Icon Component here
        },
        {
            title: 'SignIn',
            link: '/signin',
            icon: <FaUser size={20}/> // Put a Icon Component here
        },
        {
            title: 'ForgotPassord',
            link: '/forgotpassword',
            icon: <RiLockPasswordFill size={20}/> // Put a Icon Component here
        }
    ]

    function handleOpenFooterMenu(){
        setOpenFooterMenu(!openFooterMenu);
    }

    return (
        <Container>   
            <LogoBar>
                <img style={{width: '50%'}} src={props.isSmallMenu ? iconStarctron : logoStarctron} alt="Logo"/>
            </LogoBar>
            
            <Options>
                {
                    options.map(option => (
                        <Link key={option.link} to={option.link} className={props.active === option.title ? 'active' : ''}>
                            <div style={{width: `${props.isSmallMenu ? '100%' : (props.width + 20) + '%'}`}}>{option.icon}</div>
                            {!props.isSmallMenu && <div>{option.title}</div>}
                        </Link>
                    ))
                }
            </Options>
            
            <Footer>
                {
                    props.isSmallMenu ?
                        <SmallButton onClick={handleOpenFooterMenu}><FiAlignLeft size={20}/></SmallButton>
                    :   
                        <>
                            <SmallButton><FiLogOut size={18}/></SmallButton>
                            <SmallButton><FiBook size={18}/></SmallButton>
                            <SmallButton><FiMessageSquare size={18}/></SmallButton>
                            <SmallButton><FiCalendar size={18}/></SmallButton>
                        </>
                }

                {
                    (props.isSmallMenu && openFooterMenu) &&
                    <div style={{ width: props.width * 4 + 'vw', left: props.width + 'vw'}}>
                        <SmallButton><FiLogOut size={18}/></SmallButton>
                        <SmallButton><FiBook size={18}/></SmallButton>
                        <SmallButton><FiMessageSquare size={18}/></SmallButton>
                        <SmallButton><FiCalendar size={18}/></SmallButton>
                    </div>
                }
                

                
            </Footer>
            
        </Container>
    )    
}

export default Menu;