function toggle(){var e=document.getElementById("toggleText"),t=document.getElementById("displayText");"block"==e.style.display?(e.style.display="none",t.innerHTML="More Location"):(e.style.display="block",t.innerHTML="Less Location")}function PopUp(){document.getElementById("ac-wrapper").style.display="none"}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}