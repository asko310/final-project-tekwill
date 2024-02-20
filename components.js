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

