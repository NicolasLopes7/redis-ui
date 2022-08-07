import { join } from 'path';

import { BrowserWindow, app, ipcMain } from 'electron';
import isDev from 'electron-is-dev';
import handlers from './handlers';

const height = 600;
const width = 800;

function createWindow() {
  const window = new BrowserWindow({
    width,
    height,
    frame: true,
    show: true,
    resizable: true,
    fullscreenable: true,
    webPreferences: {
      preload: join(__dirname, 'preload.js')
    }
  });

  const port = process.env.PORT || 3000;
  const url = isDev ? `http://localhost:${port}` : join(__dirname, '../src/out/index.html');

  if (isDev) {
    window?.loadURL(url);
    window?.webContents?.openDevTools();
    window?.webContents.on('devtools-opened', () => {
      setImmediate(() => {
        window.focus();
      });
    });
  } else {
    window?.loadFile(url);
  }

  ipcMain.on('minimize', () => {
    // eslint-disable-next-line no-unused-expressions
    window.isMinimized() ? window.restore() : window.minimize();
  });
  ipcMain.on('maximize', () => {
    // eslint-disable-next-line no-unused-expressions
    window.isMaximized() ? window.restore() : window.maximize();
  });

  ipcMain.on('close', () => {
    window.close();
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

Object.entries(handlers).forEach(([channel, callback]) => {
  ipcMain.handle(channel, callback);
});
