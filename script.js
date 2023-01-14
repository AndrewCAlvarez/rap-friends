const menuBtn = document.querySelector(".icon--menu");
const navList = document.querySelector(".nav-list");
let isToggled = false;

function toggleMenu() {
  if (isToggled) {
    // navList.style.display = "none";
    navList.style.top = "-100vh";
    menuBtn.setAttribute("name", "menu-outline");
    isToggled = !isToggled;
  } else {
    // navList.style.display = "flex";
    navList.style.top = "0";
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
