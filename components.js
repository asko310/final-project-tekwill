
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
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


