const menuBtn = document.querySelector(".icon--menu");
const navList = document.querySelector(".nav-list");
let isToggled = false;

function toggleMenu() {
  if (isToggled) {
    navList.style.display = "none";
    isToggled = !isToggled;
  } else {
    navList.style.display = "flex";
    isToggled = !isToggled;
  }
}
