
//1st element
const template = document.createElement('template');
template.innerHTML = `


`;

//1st web component
class NavBar extends HTMLElement{
    constructor(){
        super();
        const shadowRoot = this.attachShadow({mode: 'closed'});
        let clone = template.content.cloneNode(true);
        shadowRoot.append(clone);
    }
}

customElements.define('nav-bar', NavBar);


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5 
  });
  
  // Observer
  document.querySelectorAll('.scroll').forEach(item => {
    observer.observe(item);
  });


