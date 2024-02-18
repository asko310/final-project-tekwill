// listener pentru mobile menu
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("hamburger-button");
  
    const menu = document.getElementById("mobile-menu");
  
    const toggleMenu = () => {
      menu.classList.toggle("block");
    };
  
    burger.addEventListener("click", toggleMenu);
    menu.addEventListener("click", toggleMenu);
  });
  
