// listener pentru mobile menu
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("container");
  
    const menu = document.getElementById("list1");
  
    const toggleMenu = () => {
      menu.classList.toggle("hidden");
    };
  
    burger.addEventListener("click", toggleMenu);
    menu.addEventListener("click", toggleMenu);
  });
  


  