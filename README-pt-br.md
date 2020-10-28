
<p align="center">
<img src="https://github.com/mcosta21/starctron/blob/master/images/logo-markdown.png?raw=true" height="130" />
</p>

<p align="center">
  <a>
      <img alt="GitHub repo size"  src="https://img.shields.io/github/repo-size/mcosta21/starctron"/>
  </a>
  <a href="https://github.com/mcosta21/starctron/blob/master/LICENSE" >
      <img alt="MIT license" src="https://img.shields.io/badge/License-MIT-blue.svg" >
  </a>
  <a>
      <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/mcosta21/starctron" >
  </a>
</p>
<p align="center">
  <a>
      <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/mcosta21/starctron?style=social" >
  </a>
  <a>
      <img alt="GitHub forks" src="https://img.shields.io/github/forks/mcosta21/starctron?style=social" >
  </a>
</p>

<h4 align="center">Seu template Electron com React JS pronto para aproveitar sua criatividade.</h4>

<h2></h2>

<details>
<summary><strong>Sumário</strong></summary>
<br />

* [O que é isso?](#what-is-it)
* [Tente você mesmo](#try-yourself)
* [Estrutura de Arquivo](#file-structure)
* [Documentação](#documentation)
    * [Tecnologias](#technologies)
    * [Layout](#layout)
    * [Itens do Menu](#menu-items)
    * [Contexto](#context)
    * [Login de Usuário](#user-login)
    * [Tema](#theme)
    * [Crie o Aplicativo](#build-app)
* [Leia isso em outro idioma](#read-language)
* [Baixar](#download)
* [Autor](#author)

</details>


<h2 id="what-is-it">O que é isso?</h2>

<p align="justify">Este aplicativo é basicamente um projeto template para ajudá-lo com alguns recursos básicos que normalmente precisamos desenvolver, como um collapsed menu, switch theme e um login simples. Então, criei este aplicativo para aproveitar melhor o tempo em coisas novas. Além disso, você pode verificar outros componentes, como Linha (Row), Coluna (Column), Caixa (Box), Switch Button, Barra de ferramentas (Toolbar), Título (Title) and Subtítulo (Subtitle).</p>

<p align="center">
<img src="https://github.com/mcosta21/starctron/blob/master/images/banner-1.gif?raw=true" />
</p>

<br />

<h2 id="try-yourself">Tente você mesmo</h2>
<p align="justify">Lembrando que este aplicativo é baseado em <strong>Electron.js</strong>, então vamos precisar do <strong>Node</strong> instalado na máquina. Depois disso, você pode usar o editor de desenvolvimento de sua preferência, no meu caso, usei o <strong>Visual Studio Code</strong>.</p>

> Se você não quiser ler a documentação aqui, criei algumas páginas dentro do aplicativo com instruções como esta. Então, basta fazer o clone e seguir os passos de instalação abaixo.


```bash
# Clone o repositório
$ git clone https://github.com/mcosta21/starctron.git

# Acesse a pasta
$ cd starctron

# Instale as dependências
$ yarn or npm install

# Inicie o aplicativo
$ yarn electron-dev or npm run electron-dev
```

<br />

<h2 id="file-structure">Estrutura de Arquivo</h2>

```
starctron
│
└─── src
│   │   index.js
│   │   routes.js
│   │
│   └─── assets
│   │
│   └─── components
│       └───  Body
│       └───  Menu
│       └───  SwitchButton
│       │   ...
│   │
│   └─── contexts
│       │   LoginContext.js
│       │   MenuContext.js
│       │   ThemeContext.js
│   │
│   └─── pages
│       └───  Home
│       └───  SignIn
│       └───  Layout
│       │   ...
│   │
│   └─── screen
│   │
│   └─── services
│   │
│   └─── styles
│       │   GlobalStyles.js
│       │   theme.js
│
│   .env
│   .gitignore
│   package.json
│   README.md
│   README-pt-br.md   

```

<br />

<h2 id="documentation">Documentação</h2>


<p align="justify">

</p>

<h3 id="technologies">🤖 Tecnologias</h3>

<table style="width: 100% !important">
  <tr></tr>
  <td align="center">
  <p></p>
    <a href="https://www.electronjs.org/">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/1200px-Electron_Software_Framework_Logo.svg.png" width="45"/>
    <p>Electron</p>
    </a>
  </td>
  
  <td align="center">
   <p></p>
    <a href="https://pt-br.reactjs.org/">
    <img src="https://cdn.auth0.com/blog/react-js/react.png" width="50"/>
    <p>React JS</p>
    </a>
  </td>
  
  <td align="center">
   <p></p>
    <a href="https://react-icons.github.io/react-icons/">
    <img src="https://camo.githubusercontent.com/0cd910e76658429374539a8d72a0608783918aae/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667" width="48"/>
    <p>React Icons</p>
    </a>
  </td>
 
  <td align="center">
   <p></p>
    <a href="https://reactrouter.com/">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIK9sjX5un1L83nejQwH5EGNKrDsEAfWSJPg&usqp=CAU" width="48"/>
    <p>React Router</p>
    </a>
  </td>
     
  <td align="center">
   <p></p>
    <a href="https://styled-components.com/">
    <img src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" width="48"/>
    <p>Styled Components</p>
    </a>
  </td>
 
<table>

<h3 id="layout">✨ Layout</h3>

<p align="justify">
Dentro do aplicativo, você pode utilizar alguns componentes que o ajudarão a criar seu conteúdo, como inserir uma caixa, com linhas e colunas. Por exemplo:
</p>

<h4>Linha com 1 coluna</h4>
<img align="center" src="https://github.com/mcosta21/starctron/blob/master/images/example-row-column1.png?raw=true">

<br/>

``` javacript
  <Row height={100}>
    <Column>
      <Box>
        <h3>100%</h3>
      </Box>
    </Column>
  </Row>
```

<h4>Linha com 2 colunas</h4>
<img align="center" src="https://github.com/mcosta21/starctron/blob/master/images/example-row-column2.png?raw=true">

<br/>

``` javacript
  <Row height={100}>
    <Column width={50}>
      <Box>
        <h3>50%</h3>
      </Box>
    </Column>
    <Column width={50}>
      <Box>
        <h3>50%</h3>
      </Box>
    </Column>
  </Row>
```

<h4>Linha com 3 colunas proporcionais</h4>
<img align="center" src="https://github.com/mcosta21/starctron/blob/master/images/example-row-column3.png?raw=true">

<br/>

``` javacript
  <Row height={100}>
    <Column>
      <Box>
        <h3>33%</h3>
      </Box>
    </Column>
    <Column>
      <Box>
        <h1>33%</h1>
      </Box>
    </Column>
    <Column>
      <Box>
        <h1>33%</h1>
      </Box>
    </Column>
  </Row>
```

<h4>Linha com 2 colunas com tamanhos distintos</h4>
<img align="center" src="https://github.com/mcosta21/starctron/blob/master/images/example-row-column-70-30.png?raw=true">

<br/>

``` javacript
  <Row height={100}>
    <Column width={70}>
      <Box>
        <h3>70%</h3>
      </Box>
    </Column>
    <Column width={30}>
      <Box>
        <h3>30%</h3>
      </Box>
    </Column>
  </Row>
```

<h4>2 Linhas com 2 colunas com tamanhos distintos</h4>
<img align="center" src="https://github.com/mcosta21/starctron/blob/master/images/example-rows2-columns-differents-sizes.png?raw=true">

<br/>

``` javacript
  <Row height={130}>
    <Column width={20}>
      <Box>
        <h3>20%</h3>
      </Box>
    </Column>
    <Column width={80}>
      <Box>
        <h3>80%</h3>
      </Box>
    </Column>
  </Row>
  <Row height={130}>
    <Column width={40}>
      <Box>
        <h3>40%</h3>
      </Box>
    </Column>
    <Column width={30}>
      <Box>
        <h3>30%</h3>
      </Box>
    </Column>
    <Column width={30}>
      <Box>
        <h3>30%</h3>
      </Box>
    </Column>
  </Row>
```


<br />

<h3 id="menu-items">📑 Itens do menu</h3>

<p align="justify">

Navegando para a pasta de componentes, você encontrará o componente Menu. Observe que sua estrutura é baseada na constante options, que serão renderizadas por um map. Então, para cada opção, um Link React-router-dom está disponível com os seguintes atributos:

```javascript
const options = [
        {
        "title": "Home",
        "link": "/home",
        "icon": "<FaHome size={20}/>"
        }
];
```

> Por fim, basta acessar o arquivo <strong>routes.js</strong> na raiz do projeto, e incluir as novas rotas para cada página, correlacionando-as com o atributo link da constante options.

<br />
<img src="https://github.com/mcosta21/starctron/blob/master/images/example-menu-items.png?raw=true" />

</p>

<br />

<h3 id="context">🌐 Contexto</h3>

<p align="justify">

A API Context é como o React disponibiliza os dados dos componentes pai para filho por meio das props. Assim, não é necessário passar explicitamente as props em cada componente.

Então, dentro da pasta <strong>src</strong>, você pode ver os contextos criados e que estão em uso no aplicativo, por exemplo:

<table>
  <tr>
  <td><strong>LoginContext</strong></td>
  <td>Esse context é responsável por manter o usuário da sessão em todos os componentes.</td>
  </tr>
  <tr>
  <td><strong>MenuContext</strong></td>
  <td>Esse context é utilizado pelo componente Menu para manter o estado de largura ministrado pelo atributo isSmallMenu.</td>
  </tr>
  <tr>
  <td><strong>ThemeContext</strong></td>
  <td>Esse context é responsável por gerenciar o tema da aplicação entre light e dark.</td>
  </tr>
<table>

</p>

<br />
<h3 id="user-login">👤 Login de Usuário</h3>

<p align="justify">
Conforme declarado na página <strong>Context API</strong>, criamos um sistema de login simples para manter o usuário em toda a sessão usando a <strong>LoginContext</strong>, então você pode acessar a pasta de <strong>services</strong> e personalizar o <strong>user.js</strong> com seu próprio método para se conectar ao banco de dados e integrar nas páginas <i>SignIn</i> e <i>ForgotPassword</i>.
</p>

```json
    {
        "id": "3",
        "username": "mcosta",
        "password": "12345",
        "email": "marcioc424@gmail.com",
        "photo": "https://avatars0.githubusercontent.com/u/30120305?s=400&u=2c33a6777ec253d664a59108230924e555c89070&v=4"
    }
```

<p align="justify">
No arquivo <strong>routes.js</strong>, note que tem um redirecionamento para a página <strong>SignIn</strong> quando não há usuário na sessão, com isso, basta comentar essa linha e partir para o desenvolvimento.
</p>

<br />
<h3 id="theme">🌓 Tema</h3>

<p align="justify">
Acessando a pasta <strong>styles</strong>, você pode customizar todas as cores disponíveis no aplicativo.
</p>
<p align="justify">
No arquivo <i>GlobalStyles.js</i> contém todos os estilos aplicados ao tema global. E no arquivo <i>theme.js</i>, contém as variáveis referentes aos temas <strong>light</strong> e <strong>dark</strong>, além de um conjunto de cores auxiliares.
</p>

> Light theme

```javascript

export const lightTheme = {
  name: 'light',
  backgrounds: {
    lightest:  '#FFFFFF',
    lighter: '#FEFEFE',
    dark: '#F5F5FC',
    darker: '#D8DCF3',
    darkest: '#CCC8C8',
  },
  colors: {
    lightest: '#252131',
    lighter: '#201B2D',
    dark: '#31303C',
    darker: '#15121E',
    darkest: '#13111B'
  },
  colorsTheme  
}

```

> Dark theme

```javascript

export const darkTheme = {
  name: 'dark',
  backgrounds: {
    lightest: '#252131',
    lighter: '#201B2D',
    dark: '#191622',
    darker: '#15121E',
    darkest: '#13111B'
  },
  colors: {
    lightest:  '#FFFFFF',
    lighter: '#FEFEFE',
    dark: '#F5F5FC',
    darker: '#D8DCF3',
    darkest: '#CCC8C8',
  },
  colorsTheme
}

```

> Global colors

```javascript

export const colorsTheme = {
    white: '#FFF',
    grey: '#F7F8FC',
    opaque: '#41414D',
    purple: '#',
    purpleDark: '#5A4B81',
    green: '#6CCACE',
    orange: '#E89E64',
    pink: '#FF79C6',
    cyan: '#78D1E1',
    red: '#E96379',
    yellow: '#FFDD67',
    blue: '#4849FF'
}

```

<p align="justify">
O arquivo <strong>theme.js</strong> é o mais importante nesse assunto, dado que o utilizamos no <strong>ThemeContext</strong> para gerenciar o tema atual da aplicação, como podemos observar ao clicar num <strong>SwitchButton</strong>. Então, caso queira customizar os temas, basta alterar os atributos de cada variável.

</p>

<br />
<h3 id="build-app">🏆 Crie o Aplicativo</h3>

<p align="justify">
A melhor parte do projeto é a pré-configuração já feita, isso visa facilitar sua vida e não te fazer perder tempo com certas configurações de projeto.
</p>
<p align="justify">
Então, antes de partirmos para o processo de <strong>build</strong>, será necessário fazer pequenas alterações no aplicativo. Claro que isso deve ser feito se você quiser o nome e icones personalizados a seu gosto.
</p>
<p align="justify">
Primeiramente, faremos algumas alterações nos arquivos contidos na pasta <strong>public</strong>. Então localize o arquivo <strong>index.html</strong> e altere a tag <strong>'title'</strong> para o nome do seu aplicativo.
</p>

```
<title>{ your_app_name }</title>
```

<p align="justify">
Após isso, acesse o arquivo de configurações do electron, e nele, você pode customizar diversas coisas como tamanho da janela, menu e icone.
</p>

<p align="justify">
A função <strong>createWindow</strong> possui atributos como width, height e icon, customize-os a vontade. Note também que, mesmo informando os atributos de tamanho da janela, a chamada <strong>mainWindow.maximize()</strong> mantém a tela em maximaze, caso queira mudar isso, apenas remova o comando.
</p>

<p align="justify">
Agora que fizemos essas personalizações, vamos para o processo de <strong>build</strong> do aplicativo. Então, acesse o arquivo <strong>package.json</strong>. Nesse arquivo, você verá todas as informações necessárias do aplicativo, tais como nome, descrição, dependências, scripts e etc. Então, lembre-se de alterações os seguintes atributos:
</p>

```json
{
  "name": "your_app_name",
  "description": "your_app_description",
  "author": "your_name",
}
```

<p align="justify">
E o mais importante, o atributo <strong>build</strong> contém o <strong>appId</strong>, não se esqueça de troca-lo, caso esteja fazendo seu próprio aplicativo, no contrário, o instalador irá substitui-lo.
</p>

```json
{
  "build": 
        { 
          "appId": "your_unique_app_id" 
        }
}
```

<p>
Finalmente, abra o terminal e execute o seguinte comando:
</p>

<h4 align="center">yarn electron-pack<h4>
<h4 align="center">npm run electron-pack<h4>

> Após finalizar o processo, será criado uma pasta chamada <strong>dist</strong>, nela haverá o arquivo instalador pronto para uso 🚀.


<br />

<h2 id="read-language">Leia isso em outro idioma</h2>
 
<table>
  <tr>
    <th><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-united-states_1f1fa-1f1f8.png" width="25"/></th>
    <th><a href="https://github.com/mcosta21/starctron/blob/master/README.md">Inglês / English</a></th>
  </tr>
  
</table>

<br />

<h2 id="download">Baixar</h2>

<a href="https://drive.google.com/drive/folders/1lk48QC6YhR-4ZD9RPq7log2tdFWKXRJI?usp=sharing">
<img src="https://github.com/mcosta21/starctron/blob/master/images/button-windows.png?raw=true" alt="Download for Windows" width="200"/>
</a>

<br />

<br />

<h2 id="author">Autor</h2>

Marcio Costa [@mcosta21](https://www.linkedin.com/in/marcio-costa-03131a149/)

[![Marcio's github stats](https://github-readme-stats.vercel.app/api?username=mcosta21&theme=dracula)](https://github.com/mcosta21)

<div align="center">
💪
<div>
<p align="center">
As contribuições são bem-vindas! 
</p>
<h4 align="center">
Feito com ❤️ e JavaScript.
</h4>

<br />

