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

function updateURLgg(){
  if (active_screen_win == "ws-1"){
    if (!(document.getElementById("url-bar").value == scr_1_weburl)){
      document.getElementById("url-bar").value = scr_1_weburl
    }
  }else{
    if (!(document.getElementById("url-bar").value == scr_2_weburl)){
      document.getElementById("url-bar").value = scr_2_weburl
    }
  }
  }


document.getElementById("ws-1").addEventListener("did-navigate", (e) => {
  
  
  
  if (!(e.url.includes("homegrimapppage.html") )){
    scr_1_weburl = e.url
    console.log(e.url)
    
  }
  else{
    scr_1_weburl = ""
  }
  updateURLgg()
});

document.getElementById("ws-2").addEventListener("did-navigate", (e) => {
  if (!(e.url.includes("homegrimapppage.html") )){
    scr_2_weburl = e.url
  }
  else{
    scr_2_weburl = ""
  }
  updateURLgg()
});



document.getElementById("ws-1").addEventListener("did-navigate-in-page", (e) => {
  
  
  
  if (!(e.url.includes("homegrimapppage.html") )){
    scr_1_weburl = e.url
    console.log(e.url)
    
  }
  else{
    scr_1_weburl = ""
  }
  updateURLgg()
});

document.getElementById("ws-2").addEventListener("did-navigate-in-page", (e) => {
  if (!(e.url.includes("homegrimapppage.html") )){
    scr_2_weburl = e.url
  }
  else{
    scr_2_weburl = ""
  }
  updateURLgg()
});