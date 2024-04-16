const { app, BrowserWindow,ipcMain, ipcRenderer  } = require('electron');

const path = require('node:path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    
    webPreferences: {
      webviewTag: true,
      contextIsolation: false,
      nodeIntegration:true,
      preload: path.join(__dirname, 'preload.js'),

    },
    focusable:true,
    icon:path.join(__dirname, 'icon.png'),
    titleBarStyle: 'hidden',
    transparent: true,
    frame:false
  });
  // mainWindow.maximize()
  mainWindow.menuBarVisible = false
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.maximize()
  


  


  ipcMain.on("maxized",(event,data)=>{
    mainWindow.addListener("maximize",()=> {
      event.reply("maxized-reply","true")
    })
  })

  ipcMain.on("unmaxized",(event,data)=>{
    mainWindow.addListener("unmaximize",()=> {
      event.reply("unmaxized-reply","true")
    })
  })

  ipcMain.on("max",(event,data)=>{
    
    if (mainWindow.isMaximized() == true){
      mainWindow.unmaximize()
    }
    else{
      mainWindow.maximize()
    }
   
  })

  ipcMain.on("mini",(event,data)=>{
    console.log("mini")
    mainWindow.minimize()
  })

  
};

ipcMain.on("close",(error,data)=>{
  app.quit()
 
})





// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});



app.on('web-contents-created', function (event, contents) {
  if (contents.getType() === 'webview') {
    contents.on('new-window', function (newWindowEvent) {
      newWindowEvent.preventDefault();
    });
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
