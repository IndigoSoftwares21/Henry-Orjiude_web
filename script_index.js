function njalo()
{
    document.getElementById("iphone").src = "njalo_iphone.png"
    document.getElementById("ipad").src = "njalo_ipad.png"
    document.getElementById("mac").src = "njalo_mac.png"
    document.getElementById("njalo").style.border= "#14213D 4px solid"
    document.getElementById("twale").style.border= "none"
    document.getElementById("pen").style.border= "none"
    document.getElementById("gil").style.border= "none"
}

function twale() {
    document.getElementById("iphone").src = "iphone12.png"
    document.getElementById("ipad").src = "ipad.png"
    document.getElementById("mac").src = "mbook.png"
    document.getElementById("twale").style.border= "#14213D 4px solid"
    document.getElementById("njalo").style.border= "none"
    document.getElementById("pen").style.border= "none"
    document.getElementById("gil").style.border= "none"
}

function pen() {
    document.getElementById("iphone").src = "pen_iphone.png"
    document.getElementById("ipad").src = "pen_ipad.png"
    document.getElementById("mac").src = "pen_mac.png"
    document.getElementById("pen").style.border= "#14213D 4px solid"
    document.getElementById("njalo").style.border= "none"
    document.getElementById("twale").style.border= "none"
    document.getElementById("gil").style.border= "none"
}

function gil() {
    document.getElementById("iphone").src = "gil_iphone.png"
    document.getElementById("ipad").src = "gil_ipad.png"
    document.getElementById("mac").src = "gil_mac.png"
    document.getElementById("gil").style.border= "#14213D 4px solid"
    document.getElementById("njalo").style.border= "none"
    document.getElementById("twale").style.border= "none"
    document.getElementById("pen").style.border= "none"
}

function call()
{
    location.href = "tel:+2348103918864";
}

function mail()
{
    location.href = "mailto:orjihen@yahoo.com";
}

function link ()
{
    location.href = "http://linkedin.com/in/henry-orjiude-b27a6583";
}

function git()
{
    location.href = "http://github.com/Orjihenry";
}

function indigo()
{
    location.href = "https://www.indigosoftwares.xyz/";
}
//window.onload = isclicked_uibuttton();

    


    let modelight = 'sunny-outline'
    let modedark = 'moon-outline'

    function darkmode()
    {
        document.documentElement.style.setProperty('--bg-color', '#263238')
        document.documentElement.style.setProperty('--black-color', '#FFF')
        document.documentElement.style.setProperty('--orange', '#700a00')
        document.documentElement.style.setProperty('--nav', '#004d40')
        document.getElementById("modeicon").setAttribute("name",modelight)
        document.getElementById("modetitle").innerHTML = "Light Mode"
        //alert("Darkmode")
    }

    function lightmode()
    {
        document.documentElement.style.setProperty('--bg-color', '#F2FFFE')
        document.documentElement.style.setProperty('--black-color', '#000')
        document.documentElement.style.setProperty('--orange', '#ff9900')
        document.documentElement.style.setProperty('--nav', '#26A69A')
        document.getElementById("modeicon").setAttribute('name',modedark)
        document.getElementById("modetitle").innerHTML = "Dark Mode"
        //alert("Lightmode")
    }

function openMenu()
{
 var menu =   document.getElementById("menu");
 var times = document.getElementById("times");
 var bars = document.getElementById("bars");

 menu.style.height = "fit-content"
menu.style.display= "flex"
 times.style.display= "block"
 times.style.visibility = "visible"
 bars.style.display= "none"
 bars.style.visibility = "none"



}
function closeMenu()
{
 var menu =   document.getElementById("menu");
 var times = document.getElementById("times");
 var bars = document.getElementById("bars");

 menu.style.height = "0%"
menu.style.display= "none"

 times.style.display= "none"
 times.style.visibility = "none"
 bars.style.display= "block"
 bars.style.visibility = "visible"



}
    
let clickedui  = localStorage.getItem("clickeduianswer")|| false;

function checkui()
{
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')) {
        darkmode();
       
        //document.getElementById("modeicon").setAttribute('name','sunny-outline')
      }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        lightmode();
        
      }
}

function toggleui()
{
   if (document.getElementById("modeicon").getAttribute("name")=="moon-outline") {
    clickedui = 1;
    localStorage.setItem("clickeduianswer", clickedui);
   }
   if (document.getElementById("modeicon").getAttribute("name")=="sunny-outline") {
    clickedui = 2;
    localStorage.setItem("clickeduianswer", clickedui);
   }
    
    

}

if(clickedui==1)
{
  darkmode();
}
else if (clickedui==2)
{
    lightmode();
}


else
{
 checkui()
    
}

function gotoContact()
{
    window.location.href = "#contact"
}

 function getyours() {
    window.location.href = "#contact"
    document.getElementById("message").focus();
document.getElementById("message").select();
document.getElementById("message").value = "Request for A Website:";


 }

