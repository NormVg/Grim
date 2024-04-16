
var active_screen_win = "ws-1"
var scr_1_weburl = ""
var scr_2_weburl = ""

document.getElementById("nav-tab").style.display = "none"
document.getElementById("tab-bar").style.display = "none"



const WebView = document.querySelector('webview')

WebView.addEventListener('dom-ready', () => {
  WebView.insertCSS(`
  body:{
    border-radius:15px;
  }
  /* width */
::-webkit-scrollbar {
  width: 10px;
  
}

/* Track */
::-webkit-scrollbar-track {
    margin:10px;
  border-radius: 1px;
  height:100px;
  
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #6E7482; 
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #272A29; 
}
  `);
})





function leftBarOpenTab(){
  
    var left = document.getElementById("screen")
    left.style.width = 'calc(100vw - 56px - 2px)'
    document.getElementById("tab-bar").style.display = "flex"
    document.getElementById('leftbar').style.width = "calc(56px - 12px)"
}

function TopBarOpen(){
    var left = document.getElementById("screen")
    left.style.height = 'calc(100vh - 45px - 2px)'
    
    document.getElementById('topbar').style.height = "calc(45px - 12px)"
    document.getElementById("nav-tab").style.display = "flex"
}



async function LeftBarClose(){
    var left = document.getElementById("screen")
    left.style.width = 'calc(100vw - 26px)'
    document.getElementById('leftbar').style.width = "12px"
    document.getElementById("tab-bar").style.display = "none"
    
}

function TopBarClose(){
    var left = document.getElementById("screen")
    left.style.height = 'calc(100vh - 26px)'
    
    document.getElementById('topbar').style.height = "12px"
    document.getElementById("nav-tab").style.display = "none"
}

function SplitScreen(){
    var type =  document.getElementById("split-ico").className
    if (type == "off"){
        document.getElementById("split-ico").src = "img/spliton.png"
        document.getElementById("split-ico").className = "on"
        document.getElementById("scr-1").style.width = "49.5%"
        document.getElementById("scr-2").style.width = "49.5%"
        document.getElementById("scr-2").style.display = "block"
        
        return
    }
    if ( type == "on"){
        document.getElementById("split-ico").src = "img/screensplit.png"
        document.getElementById("split-ico").className = "off"
        document.getElementById("scr-1").style.width = "100%"
        document.getElementById("scr-2").style.width = "0%"
        document.getElementById("scr-2").style.display = "none"
        
        return
    }
}



WebView.addEventListener('new-window', (e) => {
  alert(e.url);
});


function AddTabs(){
  
  var rand_term_hex = crypto.randomUUID()
  var a = `<div class="tab"><button onclick="alert('${rand_term_hex}')" ><img  src="img/tabdefault.png"></button></div>`
  
  
  document.getElementById("tab-bar").innerHTML = document.getElementById("tab-bar").innerHTML + a
}


function BackWeb() {
  document.getElementById(active_screen_win).goBack()
}

function NextWeb(){
  document.getElementById(active_screen_win).goForward()
}

function ReloadWeb(){
  document.getElementById(active_screen_win).reload()
}

function checkFocus() {
  UpdateURLWeb()
  var active_win = document.activeElement.id
  if (active_win == "ws-1"){
    active_screen_win = "ws-1"
    document.getElementById("scr-1").style.border =  "1px solid rgba(255, 95, 95, 50%)"
    document.getElementById("scr-2").style.border =  "1px solid black"
    document.getElementById("url-bar").value = scr_1_weburl
    return
  }
  if (active_win == "ws-2"){
    active_screen_win = "ws-2"
    document.getElementById("scr-2").style.border =  "1px solid rgba(255, 95, 95, 50%)"
    document.getElementById("scr-1").style.border =  "1px solid black"
    document.getElementById("url-bar").value = scr_2_weburl
    return
  }
}

window.setInterval(checkFocus, 100); 

function UpdateURLWeb () {
  scr_1_weburl = document.getElementById("ws-1").getURL()
  scr_2_weburl = document.getElementById("ws-2").getURL()
}
