import React from 'react';
import Body from '../../components/Body';
import { Navigator } from './styles';
import Row from '../../components/Row';
import Column from '../../components/Column';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import Box from '../../components/Box';

function MenuItems() {

  return (
          <Body active="Menu Items">

            <Title>How the menu on left works!</Title>
            <Subtitle>Como funciona o menu à esquerda!</Subtitle>
            <Row height={470}>
              <Column>
                <Box grid flexDirection="column">
                  <br/>
                  <Title size={18}>English</Title>
                  <Subtitle size={11}>
                      
                      Navigating to <strong>components</strong> folder, you will find the <strong>Menu</strong> component.
                      
                      <Navigator>
                        <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/8dfb4a298163bf551c24011aae0c6ed38f148b2c/icons/folder-src.svg"/>
                        src /
                        <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/8dfb4a298163bf551c24011aae0c6ed38f148b2c/icons/folder-components.svg"/>
                        components /
                        <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/8dfb4a298163bf551c24011aae0c6ed38f148b2c/icons/folder-other.svg"/>
                        Menu
                      </Navigator>

                      Note that its structure is based on <strong>options</strong> constant, which will be rendered by a <strong>map</strong>. 
                      Then, for each <strong>option</strong>, a React-router-dom <strong>Link</strong> is available with the following attributes:
                      
                      <Navigator>
                        { '{ '} 
                        <br />   
                        title: 'Home',
                        <br />
                        link: '/home',
                        <br />
                        icon:  {'<FaHome size={20}/>'}
                        <br />
                        { '}'}
                      </Navigator>

                    Finally, just access the <strong>routes.js</strong> file at the root of the project, and include the new routes for each page,
                    correlating them with the <strong>option's</strong> link attribute.
                    <Navigator>
                      <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/8dfb4a298163bf551c24011aae0c6ed38f148b2c/icons/routing.svg"/>
                      routes.js
                    </Navigator>
                  </Subtitle>
                </Box>
              </Column>
            </Row>
            
            <Row height={470}>
              <Column>
                <Box grid flexDirection="column">
                  <br/>
                  <Title size={18}>Português</Title>
                  <Subtitle size={11}>
                      
                      Navegando até a pasta <strong>components</strong>, você vai encontrar o componente <strong>Menu</strong>.
                      
                      <Navigator>
                        <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/8dfb4a298163bf551c24011aae0c6ed38f148b2c/icons/folder-src.svg"/>
                        src /
                        <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/8dfb4a298163bf551c24011aae0c6ed38f148b2c/icons/folder-components.svg"/>
                        components /
                        <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/8dfb4a298163bf551c24011aae0c6ed38f148b2c/icons/folder-other.svg"/>
                        Menu
                      </Navigator>

                      Note que sua estrutura se baseia na constante <strong>options</strong>, que será renderizada por um <strong>map</strong>. 
                      <br/>Então, para cada <strong>option</strong>, um <strong>Link</strong> do React-router-dom é disponibilizado com os seguintes atributos:
                      
                      <Navigator>
                        { '{ '} 
                        <br />   
                        title: 'Home',
                        <br />
                        link: '/home',
                        <br />
                        icon:  {'<FaHome size={20}/>'}
                        <br />
                        { '}'}
                      </Navigator>

                    Por fim, basta acessar o arquivo <strong>routes.js</strong> na raiz do projeto, e incluir as novas rotas para cada página, 
                    <br />correlacionando-as com o atributo link da <strong>option</strong>.
                    <Navigator>
                      <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/8dfb4a298163bf551c24011aae0c6ed38f148b2c/icons/routing.svg"/>
                      routes.js
                    </Navigator>
                  </Subtitle>
                </Box>
              </Column>
            </Row>

            <br />

          </Body>
  );
}

export default MenuItems;
