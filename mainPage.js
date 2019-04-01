const electron = require("electron");
const url = require("url");
const path = require("path");

const {app, BrowserWindow} = electron;

let mainWindow;

// Listen for app to be ready

app.on("ready",function(){
  //creatre new mainWindow
  mainWindow = new BrowserWindow({});
  //load HTML file into window
  mainWindow.loadURL(url.format({
    pathname : path.join(__dirname, "index.html"),
    protocol: "file:",
    slashes: true
  }));
});
