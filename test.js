// electron main file

import { app, BrowserWindow, ipcMain } from "electron";
import { SystemInfoChannel } from "./IPC/SystemInfoChannel";
class Main {
  init(ipcChannels) {
    app.on("ready", this.createWindow);
    app.on("window-all-closed", this.onWindowAllClosed);
    app.on("activate", this.onActivate);
    this.registerIpcChannels(ipcChannels);
  }
  onWindowAllClosed() {
    if (process.platform !== "darwin") {
      app.quit();
    }
  }
  onActivate() {
    if (!this.mainWindow) {
      this.createWindow();
    }
  }
  createWindow() {
    this.mainWindow = new BrowserWindow({
      height: 600,
      width: 800,
      title: `Yet another Electron Application`,
      webPreferences: {
        nodeIntegration: true
      }
    });
    this.mainWindow.webContents.openDevTools();
    this.mainWindow.loadFile("../../index.html");
  }
  registerIpcChannels(ipcChannels) {
    ipcChannels.forEach(channel =>
      ipcMain.on(channel.getName(), (event, request) =>
        channel.handle(event, request)
      )
    );
  }
}
new Main().init([new SystemInfoChannel()]);

//
