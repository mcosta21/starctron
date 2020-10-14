import React from 'react';
import Body from '../../components/Body';
import { Navigator  } from './styles';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import Row from '../../components/Row';
import Column from '../../components/Column';
import Box from '../../components/Box';

function Theme() {
  return (
          <Body active="Theme">
            <Title>Customize the theme</Title>
            <Subtitle>Customize o tema</Subtitle>
            <Row height={400}>
              <Column>
                <Box grid flexDirection="column">
                  <Title size={18}>English</Title>
                  <Subtitle size={11}>
                      Accessing the <strong> styles </strong> folder, you can customize all the colors 
                      available in the application.

                      <Navigator>
                        <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/8dfb4a298163bf551c24011aae0c6ed38f148b2c/icons/folder-src.svg"/>
                        src /
                        <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/f901627d240fa31b0781e9fdf97e99cd862b3847/icons/folder-css.svg"/>
                        styles
                      </Navigator>

                      The <i> GlobalStyles.js </i> file contains all the styles applied to the global theme. 
                      And in the <i> theme.js </i> file, it contains the variables referring to 
                      the <strong>light</strong> and <strong>dark</strong> themes, in addition to a set of auxiliary colors.
                      <Navigator>
                        <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/8dfb4a298163bf551c24011aae0c6ed38f148b2c/icons/javascript.svg"/>
                        GlobalStyles.js
                      </Navigator>
                      <Navigator>
                        <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/8dfb4a298163bf551c24011aae0c6ed38f148b2c/icons/javascript.svg"/>
                        theme.js
                      </Navigator>

                      The <strong>theme.js</strong> file is the most important in this matter, 
                      since we use it in <strong>ThemeContext</strong> to manage the current theme 
                      of the application, as we can see by clicking on a <strong>SwitchButton</strong>. 
                      So, if you want to customize the themes, just change the attributes of each variable.

                  </Subtitle>
                </Box>
              </Column>
            </Row>

            <Row height={400}>
              <Column>
                <Box grid flexDirection="column">
                  <Title size={18}>Português</Title>
                  <Subtitle size={11}>
                      Acessando a pasta <strong>styles</strong>, você pode customizar todas as cores disponíveis 
                      no aplicativo.

                      <Navigator>
                        <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/8dfb4a298163bf551c24011aae0c6ed38f148b2c/icons/folder-src.svg"/>
                        src /
                        <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/f901627d240fa31b0781e9fdf97e99cd862b3847/icons/folder-css.svg"/>
                        styles
                      </Navigator>

                      No arquivo <i>GlobalStyles.js</i> contém todos os estilos aplicados ao tema global. E no 
                      arquivo <i>theme.js</i>, contém as variáveis referentes aos temas <strong>light</strong> e <strong>dark</strong>,
                      além de um conjunto de cores auxiliares. 
                      <Navigator>
                        <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/8dfb4a298163bf551c24011aae0c6ed38f148b2c/icons/javascript.svg"/>
                        GlobalStyles.js
                      </Navigator>
                      <Navigator>
                        <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/8dfb4a298163bf551c24011aae0c6ed38f148b2c/icons/javascript.svg"/>
                        theme.js
                      </Navigator>

                      O arquivo <strong>theme.js</strong> é o mais importante nesse assunto, dado que o utilizamos 
                      no <strong>ThemeContext</strong> para gerenciar o tema atual da aplicação, como podemos observar ao 
                      clicar num <strong>SwitchButton</strong>. Então, caso queira customizar os temas, basta alterar os atributos de cada 
                      variável.

                  </Subtitle>
                </Box>
              </Column>
            </Row>
          </Body>
  );
}

export default Theme;
