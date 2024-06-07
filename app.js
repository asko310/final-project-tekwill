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


  //menu

  function showCategory(category) {
    //ascunde
    var menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(function(item) {
      item.style.display = 'none';
    });

    // arata in dependenta de categories
    var categoryItems = document.querySelectorAll('.menu-item.' + category);
    categoryItems.forEach(function(item) {
      item.style.display = 'block';
    });
  }
  


  //fetch
  fetch('https://vercel-host-jjldcen45-asko310s-projects.vercel.app/products')
    .then(res => {
      return res.json();
    })
    .then(data => {
      data.forEach(category =>{
        const categ = `<H1></H1>`
      });
    })



        
const fetchProducts = async () => {
  const response = await fetch('https://vercel-host-ten.vercel.app/products').then((res) => res.json());
  return response;
}

const productshtml = async () => {
  // facem fetch la produse
  const products = await fetchProducts();
  
  // generam html pentru produse
  const productshtml = products.map((product) => {
    return `
    <div class="menu-item ${product.category} all">
      <img src="${product.imagine}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <span>${product.price} lei</span>
    </div>
    `;
  }).join(''); // unim toate produsele intr-un singur string

  // adaugam html-ul generat in containerul cu produse
  document.querySelector('.menu-items').innerHTML = productshtml;
}

// apelam functia care genereaza html-ul pentru produse
productshtml();
