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


  function showCategory(category) {
    //ascunde
    var menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(function(item) {
      item.style.display = 'none';
    });

    // arata in dependenta de categorie
    var categoryItems = document.querySelectorAll('.menu-item.' + category);
    categoryItems.forEach(function(item) {
      item.style.display = 'block';
    });
  }
  
