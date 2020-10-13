const electron = require('electron');
const app = electron.app;
const nativeImage = electron.nativeImage;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900, 
    height: 680,
    icon: nativeImage.createFromPath(path.join(__dirname, '../src/assets/icon-starctron-256x256.ico')),
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);
  mainWindow.maximize();
}

app.on('ready', function(){
  createWindow();

  const template = [
    {
      label: 'Menu',
      submenu: [
        { label: 'Inspecionar', role: 'toggledevtools' },
        { label: 'Fechar', role: 'quit' }
      ]
    },
    {
      label: 'Github',
      click: function(){
        electron.shell.openExternal('https://github.com/mcosta21')
      }
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});