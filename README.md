
<p align="center">
<img src="https://github.com/mcosta21/starctron/blob/master/src/assets/logo-starctron.png?raw=true" height="100" />
</p>

<p align="center">
  <a href="#backers1" alt="Backers on Open Collective">
      <img src="https://img.shields.io/opencollective/backers/shields" />
  </a>
  <a href="#backers2" alt="Backers on Open Collective">
      <img src="https://img.shields.io/opencollective/backers/shields" />
  </a>
</p>

<h4 align="center">Your Electron template with React JS ready for you to enjoy your creativity.</h4>

<h2></h2>

<details>
<summary><strong>Summary</strong></summary>
<br />

   * [List of Badges, in Markdown](#list-of-badges-in-markdown)
      * [Generic](#generic)
      * [Useful](#useful)

</details>

<br />

<h2>What is it?</h2>

<p align="justify">This application is basically a template project to help you with some basic features that we usually need develop, such as a collapsed menu, switch theme and a simple login. So, I created this app to make better use of time on new things. In addition, you can check other components such as Row, Column, Box, Switch Button, Toolbar, Title and Subtitle.</p>

<p align="center">
<img src="https://github.com/mcosta21/starctron/blob/master/images/banner-1.gif?raw=true" />
</p>

<br />

<h2>Try yourself</h2>
<p align="justify">Bearing in mind that this application is based on <strong>Electron.js</strong>, so we will need the <strong>Node</strong> installed on the machine. After that, you can use development editor like your preference, in my case, I used o <strong>Visual Studio Code</strong>.</p>

> If you don't want to read the documentation here, I created some pages inside the app with the instructions like this. So, just do the clone and following the steps to install below.


```bash
# Clone the repository
$ git clone https://github.com/mcosta21/starctron.git

# Access the folder
$ cd starctron

# Install the dependencies
$ yarn or npm install

# Launch the application
$ yarn electron-dev or npm run electron-dev
```

<br />

<h2>File Structure</h2>

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

<h2>Documentation</h2>


<p align="justify">

</p>

<h3>Technologies</h3>

<table style="width: 100% !important">
  <tr></tr>
  <td align="center">
  <p></p>
    <a href="">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/1200px-Electron_Software_Framework_Logo.svg.png" width="45"/>
    <p>Electron</p>
    </a>
  </td>
  
  <td align="center">
   <p></p>
    <a href="">
    <img src="https://cdn.auth0.com/blog/react-js/react.png" width="50"/>
    <p>React JS</p>
    </a>
  </td>
  
  <td align="center">
   <p></p>
    <a href="">
    <img src="https://camo.githubusercontent.com/0cd910e76658429374539a8d72a0608783918aae/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667" width="48"/>
    <p>React Icons</p>
    </a>
  </td>
 
  <td align="center">
   <p></p>
    <a href="">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIK9sjX5un1L83nejQwH5EGNKrDsEAfWSJPg&usqp=CAU" width="48"/>
    <p>React Router</p>
    </a>
  </td>
     
  <td align="center">
   <p></p>
    <a href="">
    <img src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" width="48"/>
    <p>Styled Components</p>
    </a>
  </td>
 
<table>

<h3>Layout</h3>

<p align="justify">
Inside the app, you can use some components that it will help you to create your content, such as insert a box, with rows and columns. For example:
</p>

<h4>Row with 1 column</h4>
<img align="center" src="https://github.com/mcosta21/starctron/blob/master/images/row-column1.png?raw=true">

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

<h4>Row with 2 columns</h4>
<img align="center" src="https://github.com/mcosta21/starctron/blob/master/images/row-column2.png?raw=true">

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

<h4>Row with 3 proportional columns</h4>
<img align="center" src="https://github.com/mcosta21/starctron/blob/master/images/row-column3.png?raw=true">

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

<h4>Row with 2 columns with different sizes</h4>
<img align="center" src="https://github.com/mcosta21/starctron/blob/master/images/row-column-70-30.png?raw=true">

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

<h4>2 rows with 2 columns of different sizes</h4>
<img align="center" src="https://github.com/mcosta21/starctron/blob/master/images/rows2-columns-differents-sizes.png?raw=true">

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

<h3>Menu Items</h3>

<p align="justify">
  Navigating to components folder, you will find the Menu component. Note that its structure is based on options constant, which will be rendered by a map. Then, for each option, a React-router-dom Link is available with the following attributes:

```json
{
  "title": "Home",
  "link": "/home",
  "icon": "<FaHome size={20}/>"
}
```

> Finally, just access the routes.js file at the root of the project, and include the new routes for each page, correlating them with the option's link attribute.

</p>

<br />

<h3>Context</h3>

<p align="justify">
The Context API is how React makes data available from parent to child components via props. Thus, it's not necessary to explicitly pass the props on each component.

Then, inside the src folder, you can see the contexts created, and which are in use in the application, for example:

<table>
  <tr>
  <td><strong>LoginContext</strong></td>
  <td>This context is responsible for keeping the session user in all components.</td>
  </tr>
  <tr>
  <td><strong>MenuContext</strong></td>
  <td>This context is used by the Menu component to maintain the width state provided by the isSmallMenu attribute.</td>
  </tr>
  <tr>
  <td><strong>ThemeContext</strong></td>
  <td>This context is responsible for managing the application theme between light e dark.</td>
  </tr>
<table>

</p>

<br />
<h3>User Login</h3>

<p align="justify">
As stated on the Context API page, we created a simple login system to keep the user throughout the session using the LoginContext, so you can access the services folder and customize <strong>user.js</strong> with your own method to connect to the database and integrate into the SignIn and ForgotPassword pages.

In the <strong>routes.js</strong> file, note that there is a redirect to the <strong>SignIn</strong> page when there is no user in the session, with that, just comment on that line and go to development.
</p>

<br />
<h3>Theme</h3>

<p align="justify">
Accessing the <strong>styles</strong> folder, you can customize all the colors available in the application.
</p>
<p align="justify">
The <strong>GlobalStyles.js</strong> file contains all the styles applied to the global theme. And in the <strong>theme.js</strong> file, it contains the variables referring to the light and dark themes, in addition to a set of auxiliary colors.
</p>
<p align="justify">
The <strong>theme.js</strong> file is the most important in this matter, since we use it in ThemeContext to manage the current theme of the application, as we can see by clicking on a <strong>SwitchButton</strong>. So, if you want to customize the themes, just change the attributes of each variable.

</p>

<br />
<h3>Build the App</h3>

<p align="justify">
The best part of the project is a pre-configuration already done, this aims to make your life easier and not waste your time with certain project configurations.
</p>
<p align="justify">
So, before we go into the build process, it will be necessary to make small changes to the application. Of course, this should be done if you want the name and icons customized to your liking.
</p>
<p align="justify">
First, we will make some changes to the files contained in the public folder. Then find the <strong>index.html</strong> file and change the <strong>title</strong> tag to your application name.
</p>

```
<title>{ your_app_name }</title>
```

<p align="justify">
After that, access the electron settings file, where you can customize several things such as window size, menu and icon.
</p>

<p align="justify">
The <strong>createWindow</strong> function has attributes like width, height and icon, customize them at will. Note also that, even informing the size attributes of the window, the call <strong>mainWindow.maximize()</strong> keeps the screen at maximize, if you want to change that, just remove the command.
</p>

<p align="justify">
Now that we've made these customizations, let's move on to the build process of the application. Then, access the <strong>package.json</strong> file. In this file, you'll see all the necessary information for the application, such as name, description, dependencies, scripts, etc. So, remember to change the following attributes:
</p>

```json
{
  "name": "your_app_name",
  "description": "your_app_description",
  "author": "your_name",
}
```

<p align="justify">
And most importantly, the build attribute contains the appId, don't forget to change it, if you are making your own application, on the contrary, the installer will replace it.
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
Finally, open the terminal and run the following command:
</p>

<h4 align="center">yarn electron-pack<h4>
<h4 align="center">npm run electron-pack<h4>

> After finishing the process, a folder called <strong>dist</strong> will be created, there will be the installer file ready for use 🚀.


<br />

<h2>Read this in other languages</h2>
 
<table>
  <tr>
    <th><img src="https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Brazil.png" /></th>
    <th><a href="">Português / Portuguese</a></th>
  </tr>
  
</table>

<br />

<h2>Download</h2>

[![](https://linkmaker.itunes.apple.com/assets/shared/badges/en-us/macappstore-lrg.svg)](https://apps.apple.com/us/app/gifski/id1351639930?mt=12)

<br />

<h2>Author</h2>

Marcio Costa [@mcosta21](https://twitter.com/alexandereardon)

[![Marcio's github stats](https://github-readme-stats.vercel.app/api?username=mcosta21&theme=dracula)](https://github.com/anuraghazra/github-readme-stats)

<br />

