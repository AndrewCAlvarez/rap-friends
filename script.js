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
