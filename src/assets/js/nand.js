function toggleNav() {
    navSize = document.getElementById("mySidebar").offsetWidth;
    if (navSize > 0) {
     return closeNav();
    }
     return openNav();
   }

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("bord").style.marginRight = "250px";
    document.getElementById("openbtn").style.marginRight = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("bord").style.marginRight = "0";
    document.getElementById("openbtn").style.marginRight = "0";
  }


