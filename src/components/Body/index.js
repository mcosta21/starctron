import React, { useState, useContext } from 'react';
import { Container, Content} from './styles';
import Menu from '../../components/Menu';
import Topbar from '../Topbar';
import Column from '../Column';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { MenuContext } from '../../contexts/MenuContext';

function Body(props){
    
    const context = useContext(MenuContext);
    const [smallMenu, setSmallMenu] = useState(context.menu.state);

    const [firstColumn, setFirstColumn] = useState(!smallMenu ? 20 : 5);
    const [secondColumn, setSecondColumn] = useState(!smallMenu ? 80 : 95);

    function handleSmallMenu(){
        if(smallMenu){
            setFirstColumn(20);
            setSecondColumn(80);
        }
        else {
            setFirstColumn(5);
            setSecondColumn(95);
        }
        setSmallMenu(!smallMenu);
        context.setMenu({state: !smallMenu})
    }

    return (
        <Container>
            <Column width={firstColumn} height={100}>
                <div 
                    onClick={() => handleSmallMenu()} 
                    style={{left: firstColumn + 'vw'}}
                    className="button-small-menu"
                >
                        { smallMenu ? <FiChevronRight/> : <FiChevronLeft/> }
                </div>
                    
                <Menu width={firstColumn} active={props.active} isSmallMenu={smallMenu}/>

            </Column>
            <Column width={secondColumn} height={100}>
                <Topbar name={props.active}/>
                <Content>
                    { 
                        props.children
                    }
                </Content>
            </Column>
          </Container>
    )    
}

export default Body;