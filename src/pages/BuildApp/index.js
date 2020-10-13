import React from 'react';
import Body from '../../components/Body';
import { Content, Navigator } from './styles';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import Row from '../../components/Row';
import Column from '../../components/Column';
import Box from '../../components/Box';

function BuildApp() {
  return (
          <Body active="Build the App">
            <Title>Let's create your app</Title>
            <Subtitle>Vamos criar seu app</Subtitle>
            <Row height={1200}>
              <Column>
                <Box grid flexDirection="column">
                  <Title size={18}>English</Title>
                  <Subtitle size={11}>
                    The best part of the project is a pre-configuration already done, this aims to make 
                    your life easier and not waste your time with certain project configurations.
                    <br />
                    <br />

                    So, before we go into the <strong> build </strong> process, it will be necessary 
                    to make small changes to the application. Of course, this should be done if you want 
                    the name and icons customized to your liking.
                    <br />
                    <br />

                    First, we will make some changes to the files contained in the <strong>public</strong> folder.
                    
                    <Navigator>
                      <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/f901627d240fa31b0781e9fdf97e99cd862b3847/icons/folder-public.svg"/>
                      public /
                    </Navigator>

                    Then find the <strong>index.html</strong> file and change the <strong>{'<title>'}</strong> tag 
                    to your application name.                   
                    
                    <Content>
                      <strong>{'<title>{ your_app_name }</title>'}</strong>
                    </Content>

                    <br />
                    After that, access the electron settings file, where you can customize several things 
                    such as window size, menu and icon.

                    <Navigator>
                      <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/8dfb4a298163bf551c24011aae0c6ed38f148b2c/icons/javascript.svg"/>
                      electron.js
                    </Navigator>

                    The <strong>createWindow</strong> function has attributes like <i>width</i>, <i>height</i> and <i>icon</i>, 
                    customize them at will. Note also that, even informing the size attributes of the window, 
                    the call <strong>mainWindow.maximize()</strong> keeps the screen at maximize, if you want to change that, 
                    just remove the command.

                    <br />
                    <br />

                    Now that we've made these customizations, let's move on to the <strong>build</strong> process 
                    of the application. Then, access the <strong>package.json</strong> file.

                    <Navigator>
                      <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/f901627d240fa31b0781e9fdf97e99cd862b3847/icons/nodejs.svg"/>
                      package.json
                    </Navigator>

                    In this file, you'll see all the necessary information for the application, 
                    such as name, description, dependencies, scripts, etc. So, remember to change the 
                    following attributes:
                    
                    <Navigator>
                      {'{'}
                      <br />
                      "name": "your_app_name", 
                      <br />
                      "description": "your_app_description",
                      <br />
                      "author": "your_name",
                      <br />
                      {'}'}
                    </Navigator>

                    And most importantly, the <strong>build</strong> attribute contains the <strong>appId</strong>, 
                    don't forget to change it, if you are making your own application, on the contrary, 
                    the installer will replace it.

                    <Navigator>
                      {'{'}
                      <br />
                      "build": { '{ "appId": "your_unique_app_id" }' } 
                      <br />
                      {'}'}
                    </Navigator>

                    <br />
                    <br />

                    Finally, open the terminal and run the following command:
                    <br />
                    <Content>
                      <strong>yarn electron-pack </strong>
                    </Content>
                    <Content>
                      <strong>npm run electron-pack </strong>
                    </Content>

                    <br />
                    After finishing the process, a folder called <strong>dist</strong> will be created, 
                    there will be the installer file ready for use 🚀.
                  </Subtitle>
                </Box>
              </Column>
            </Row>

            <Row height={1200}>
              <Column>
                <Box grid flexDirection="column">
                  <Title size={18}>Português</Title>
                  <Subtitle size={11}>
                    A melhor parte do projeto é a pré-configuração já feita, isso visa facilitar sua vida e não te
                    fazer perder tempo com certas configurações de projeto.
                    <br />
                    <br />

                    Então, antes de partirmos para o processo de <strong>build</strong>, será necessário fazer pequenas
                    alterações no aplicativo. Claro que isso deve ser feito se você quiser o nome e icones personalizados
                    a seu gosto.
                    <br />
                    <br />

                    Primeiramente, faremos algumas alterações nos arquivos contidos na pasta <strong>public</strong>.
                    
                    <Navigator>
                      <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/f901627d240fa31b0781e9fdf97e99cd862b3847/icons/folder-public.svg"/>
                      public /
                    </Navigator>

                    Então localize o arquivo <strong>index.html</strong> e altere a tag <strong>{'<title>'}</strong> 
                    para o nome do seu aplicativo.                    
                    
                    <Content>
                      <strong>{'<title>{ your_app_name }</title>'}</strong>
                    </Content>

                    <br />
                    Após isso, acesse o arquivo de configurações do electron, e nele, você pode customizar diversas coisas como 
                    tamanho da janela, menu e icone.

                    <Navigator>
                      <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/8dfb4a298163bf551c24011aae0c6ed38f148b2c/icons/javascript.svg"/>
                      electron.js
                    </Navigator>

                    A função <strong>createWindow</strong> possui atributos como <i>width</i>, <i>height</i> e <i>icon</i>, 
                    customize-os a vontade. Note também que, mesmo informando os atributos de tamanho da janela, 
                    a chamada <strong>mainWindow.maximize()</strong> mantém a tela em maximaze, caso queira mudar isso, 
                    apenas remova o comando.

                    <br />
                    <br />

                    Agora que fizemos essas personalizações, vamos para o processo 
                    de <strong>build</strong> do aplicativo. Então, acesse o arquivo <strong>package.json</strong>.

                    <Navigator>
                      <img alt="" width="20" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/f901627d240fa31b0781e9fdf97e99cd862b3847/icons/nodejs.svg"/>
                      package.json
                    </Navigator>

                    Nesse arquivo, você verá todas as informações necessárias do aplicativo, tais como nome, descrição, 
                    dependências, scripts e etc. Então, lembre-se de alterações os seguites atributos:
                    
                    <Navigator>
                      {'{'}
                      <br />
                      "name": "your_app_name", 
                      <br />
                      "description": "your_app_description",
                      <br />
                      "author": "your_name",
                      <br />
                      {'}'}
                    </Navigator>

                    E o mais importante, o atributo <strong>build</strong> contém o <strong>appId</strong>, não se 
                    esqueça de troca-lo, caso esteja fazendo seu próprio aplicativo, no contrário, o instalador 
                    irá substitui-lo.

                    <Navigator>
                      {'{'}
                      <br />
                      "build": { '{ "appId": "your_unique_app_id" }' } 
                      <br />
                      {'}'}
                    </Navigator>

                    <br />
                    <br />

                    Finalmente, abra o terminal e execute o seguinte comando:
                    <br />
                    <Content>
                      <strong>yarn electron-pack </strong>
                    </Content>
                    <Content>
                      <strong>npm run electron-pack </strong>
                    </Content>

                    <br />
                    Após finalizar o processo, será criado uma pasta chamada <strong>dist</strong>, nela haverá 
                    o arquivo instalador pronto para uso 🚀.
                  </Subtitle>
                </Box>
              </Column>
            </Row>
          </Body>
  );
}

export default BuildApp;
