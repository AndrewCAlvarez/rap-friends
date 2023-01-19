const menuBtn = document.querySelector(".icon--menu");
const navList = document.querySelector(".nav-list");
let isToggled = false;

function toggleMenu() {
  if (isToggled) {
    // navList.style.display = "none";
    // navList.style.top = "-100vh";
    navList.setAttribute("class", "nav-list nav-list-closed");
    menuBtn.setAttribute("name", "menu-outline");
    isToggled = !isToggled;
  } else {
    // navList.style.display = "flex";
    // navList.style.top = "0";
    navList.setAttribute("class", "nav-list nav-list-open");
    menuBtn.setAttribute("name", "close-outline");
    isToggled = !isToggled;
  }
}
//////////////////////////////////////
//
// FOOTER DROPDOWN MENU
//
//////////////////////////////////////

let footerDropdownBtn = document.querySelectorAll(".footer-dropdown-btn");
let footerDropdownUL = document.querySelectorAll(".footer-dropdown-ul");

for (let i = 0; i < footerDropdownBtn.length; i++) {
  footerDropdownBtn[i].addEventListener("click", (click) => {
    if (footerDropdownUL[i].className === "footer-dropdown-ul") {
      footerDropdownUL[i].className = "footer-dropdown-ul-open";
    } else {
      footerDropdownUL[i].className = "footer-dropdown-ul";
    }
  });
}

// Sub Nav Scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || currentScrollPos == 0.0) {
    document.querySelector(".nav-list").style.top = "0";
  } else {
    document.querySelector(".nav-list").style.top = "-50%";
  }
  prevScrollpos = currentScrollPos;
};
