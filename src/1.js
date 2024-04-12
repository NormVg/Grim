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

function highlightedSplit(type){
    
    if (type == '0'){
        alert(1)
        // document.getElementById("scr-1").style.border = "1px solid whitesmoke;"
        // document.getElementById("scr-2").style.border = "1px solid black;"
        return
    }
    if (type == '1'){
        alert(2)
        // document.getElementById("scr-2").style.border = "1px solid whitesmoke;"
        // document.getElementById("scr-1").style.border = "1px solid black;"
        return
    }
}


document.getElementById("scr-1").addEventListener("click",() => {
    alert("34")
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

