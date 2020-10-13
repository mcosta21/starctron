import React, { useContext, useEffect, useState } from 'react';
import Body from '../../components/Body';
import { Content } from './styles';
import Row from '../../components/Row';
import Column from '../../components/Column';
import Box from '../../components/Box';
import logo from '../../assets/icon-starctron.png';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import { ThemeContext} from '../../contexts/ThemeContext';
import SwitchButton from '../../components/SwitchButton';
import { lightTheme, darkTheme } from '../../styles/theme';

function Home() {

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
          <Body active="Home">

              <Row height={700}>
                <Column>
                  <Box flexDirection="column">
                    <img alt="Starctron" src={logo} />
                    <Content>
                        <Title size={30}>Starctron</Title>
                        <br />
                        <Subtitle>Your Electron template with React JS ready for you to enjoy your creativity.</Subtitle>
                        <Subtitle size={10}>Seu template Electron com React JS pronto para você desfrutar sua criatividade.</Subtitle>
                        <aside>
                          <Subtitle size={11}>
                            execute on terminal <br/>
                            <strong>yarn electron-dev</strong> or <strong>npm run electron-dev</strong>
                          </Subtitle>
                        </aside>
                        <br />
                        <aside>
                          <Subtitle>{themeName} theme</Subtitle><SwitchButton onClick={handleChangeTheme} value={stateTheme}/>
                        </aside>
                    </Content>
                  </Box>
                </Column>
              </Row>
          </Body>
  );
}

export default Home;
