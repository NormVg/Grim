
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
    document.getElementById('topbar').className = "topbar-drag"
}



async function LeftBarClose(){
    var left = document.getElementById("screen")
    left.style.width = 'calc(100vw - 26px)'
    document.getElementById('leftbar').style.width = "12px"
    document.getElementById("tab-bar").style.display = "none"
    
}

function TopBarClose(){
  
    if (AppWinState == "full"){
      var left = document.getElementById("screen")
      left.style.height = 'calc(100vh - 26px)'
      
      document.getElementById('topbar').style.height = "12px"
      document.getElementById("nav-tab").style.display = "none"
      document.getElementById('nav-tab').className = ""  
    }
    
  
    
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
  
  var active_win = document.activeElement.id
  if (active_win == "ws-1"){
    active_screen_win = "ws-1"
    updateURLgg()
    document.getElementById("scr-1").style.border =  "1px solid rgba(255, 95, 95, 50%)"
    document.getElementById("scr-2").style.border =  "1px solid black"
    
    return
  }
  if (active_win == "ws-2"){
    active_screen_win = "ws-2"
    updateURLgg()
    document.getElementById("scr-2").style.border =  "1px solid rgba(255, 95, 95, 50%)"
    document.getElementById("scr-1").style.border =  "1px solid black"
    
    return
  }
}

window.setInterval(checkFocus, 100); 



document.getElementById("url-bar").addEventListener("keypress", function(event) {

  if (event.key === "Enter") {

    event.preventDefault();
    var querry = String( document.getElementById("url-bar").value)
    if (querry.startsWith("http://")){
      document.getElementById(active_screen_win).src = querry
      return
    }
    if (querry.startsWith("https://")){
      document.getElementById(active_screen_win).src = querry
      return
    }
    else{
      document.getElementById(active_screen_win).src = "https://www.google.com/search?q="+querry
      return
    }
  }
}); 