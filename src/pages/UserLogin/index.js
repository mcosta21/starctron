import React from 'react';
import Body from '../../components/Body';
import { Navigator } from './styles';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import Row from '../../components/Row';
import Column from '../../components/Column';
import Box from '../../components/Box';

function UserLogin() {
  return (
          <Body active="User Login">
            <Title>Do your own login</Title>
            <Subtitle>Faça seu próprio login</Subtitle>
            <Row height={300}>
              <Column>
                <Box grid flexDirection="column">
                  <Title size={18}>English</Title>
                  <Subtitle size={11}>
                    As stated on the <strong>Context API</strong> page, we created a simple login system to keep 
                    the user throughout the session using the <strong>LoginContext</strong>, so you can access 
                    the <strong>services </strong> folder and customize <strong>user.js</strong> with your own 
                    method to connect to the database and integrate into the <i>SignIn</i> and <i>ForgotPassword</i> pages.
                  
                    <Navigator>
                      <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/8dfb4a298163bf551c24011aae0c6ed38f148b2c/icons/folder-src.svg"/>
                      src /
                      <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/8dfb4a298163bf551c24011aae0c6ed38f148b2c/icons/folder-controller.svg"/>
                      services /
                      <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/8dfb4a298163bf551c24011aae0c6ed38f148b2c/icons/javascript.svg"/>
                      user.js
                    </Navigator>

                    In the <strong>routes.js</strong> file, note that there is a redirect to the <strong>SignIn</strong> page 
                    when there is no user in the session, with that, just comment on that line and go to development.
                  </Subtitle>
                </Box>
              </Column>
            </Row>

            <Row height={300}>
              <Column>
                <Box grid flexDirection="column">
                  <Title size={18}>Português</Title>
                  <Subtitle size={11}>
                    Conforme declarado na página <strong>Context API</strong>, criamos um sistema de login simples 
                    para manter o usuário em toda a sessão usando a <strong>LoginContext</strong>, 
                    então você pode acessar a pasta de <strong>services</strong> e personalizar o <strong>user.js</strong> com
                    seu próprio método para se conectar ao banco de dados e integrar nas páginas <i>SignIn</i> e <i>ForgotPassword</i>.
                  
                    <Navigator>
                      <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/8dfb4a298163bf551c24011aae0c6ed38f148b2c/icons/folder-src.svg"/>
                      src /
                      <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/8dfb4a298163bf551c24011aae0c6ed38f148b2c/icons/folder-controller.svg"/>
                      services /
                      <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/8dfb4a298163bf551c24011aae0c6ed38f148b2c/icons/javascript.svg"/>
                      user.js
                    </Navigator>

                    No arquivo <strong>routes.js</strong>, note que tem um redirecionamento para a página <strong>SignIn</strong> quando não há usuário 
                    na sessão, com isso, basta comentar essa linha e partir para o desenvolvimento.
                  </Subtitle>
                </Box>
              </Column>
            </Row>
          </Body>
  );
}

export default UserLogin;
