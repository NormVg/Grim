document.getElementById("nav-tab").style.display = "none"
document.getElementById("tab-bar").style.display = "none"

const webview = document.querySelector('webview')

webview.addEventListener('dom-ready', () => {
  webview.insertCSS(`
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

// TopBarOpen()