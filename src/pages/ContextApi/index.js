import React from 'react';
import Body from '../../components/Body';
import { List, Navigator } from './styles';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import Row from '../../components/Row';
import Column from '../../components/Column';
import Box from '../../components/Box';

function ContextApi() {
  return (
          <Body active="Context API">
            <Title>Using Context API</Title>
            <Subtitle>Utilizando Context API</Subtitle>
            <Row height={500}>
              <Column>
                <Box grid flexDirection="column">
                  <Title size={18}>English</Title>
                  <Subtitle size={11}>
                      O Context API é forma que o React disponibiliza dados passando de componentes 
                      pai para filho via <strong>props.</strong>
                      <br />Dessa forma, não é necessário passar 
                      explicitamente as <strong>props</strong> em cada componente. 

                      <br />
                      <br />

                      Então, dentro da pasta <strong>src</strong>, você pode ver os <strong>contexts</strong> criados,
                      e que estão em uso na aplicação, por exemplo:
                      
                      <Navigator>
                        <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/8dfb4a298163bf551c24011aae0c6ed38f148b2c/icons/folder-src.svg"/>
                        src /
                        <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/8dfb4a298163bf551c24011aae0c6ed38f148b2c/icons/folder-hook.svg"/>
                        contexts
                      </Navigator>

                      <List>
                        <ul>
                            <li><strong>LoginContext</strong>: Esse context é responsável por manter o 
                            usuário da sessão em todos os componentes.</li>
                            
                            <li><strong>MenuContext</strong>: Esse context é utilizado pelo componente Menu 
                            para manter o estado de largura ministrado pelo atributo <i>isSmallMenu</i>.</li>
                            
                            <li><strong>ThemeContext</strong>: Esse context é responsável por gerenciar o tema
                            da aplicação entre <i>light</i> e <i>dark</i>.</li>
                        </ul>
                      </List>

                      Você pode ver esses contexts na pasta <strong>screen</strong>, que serve como uma casca
                      global da aplicação, sendo assim, o componente de maior nível do escopo.

                  </Subtitle>
                </Box>
              </Column>
            </Row>

          </Body>
  );
}

export default ContextApi;
