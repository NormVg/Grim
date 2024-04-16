const { ipcRenderer } = require("electron")
var LastWinState = "no"
var WinMaxState = "no"

ipcRenderer.on("win-max-state",(error,data)  => {
  WinMaxState = data
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

function UpdateWinState(){
  ipcRenderer.send("win-max-check", "true");
  if (WinMaxState ==  "full" && LastWinState == "no" ){
    TopBarOpen()
    document.getElementById("nav-tab").className = "nav-tab-full"
    LastWinState = "full"
  }
  if (WinMaxState == "no" && LastWinState == "full"){
    document.getElementById("nav-tab").className = ""
    TopBarClose()
    LastWinState = "no"
  }



}

window.setInterval(UpdateWinState, 205); 