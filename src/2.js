const { ipcRenderer } = require("electron")

var AppWinState = "full"


ipcRenderer.send("maxized",'true')
ipcRenderer.send("unmaxized",'true')

ipcRenderer.on("unmaxized-reply",(error,data) => {
  TopBarOpen()
  AppWinState = "no-full"
  document.getElementById("nav-tab").className = "nav-tab-full"
  ipcRenderer.send("maxized",'true')
})

ipcRenderer.on("maxized-reply",(error,data) => {
  TopBarClose()
  AppWinState = "full"
  document.getElementById("nav-tab").className = ""
  ipcRenderer.send("unmaxized",'true')
})

function CloseAPP() {
    
  ipcRenderer.send("close", "true");
}

function maximizeApp() {
  ipcRenderer.send("max", "true");
}
function minimizeApp() {
  ipcRenderer.send("mini", "true");
}

