
//1st element
const template = document.createElement('template');
template.innerHTML = `


`;

//this is the web component
class NavBar extends HTMLElement{
    constructor(){
        super();
        const shadowRoot = this.attachShadow({mode: 'closed'});
        let clone = template.content.cloneNode(true);
        shadowRoot.append(clone);
    }
}

customElements.define('nav-bar', NavBar);

//
//const observer = new IntersectionObserver((entries) => {
    //entries.forEach((entry) => {
        //console.log(entry)
        //if (entry.isIntersecting) {
           // entry.target.classList.add('show');
       // } else {
       //     entry.target.classList.remove('show');
      //  }
  //  });
//});

//const hiddenElements = document.querySelectorAll('.hidden');
//hiddenElements.forEach((el) => observer.observe(el));

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5 // Adjust threshold as needed
  });
  
  // Observe grid items
  document.querySelectorAll('.scroll').forEach(item => {
    observer.observe(item);
  });


