const template = document.createElement('template');
template.innerHTML = `

  <style>
  :host {
    background-color: green;
    display: block;
  }
  </style>
  <div>
  <h1>HAM</h1>
    <slot name = "navbar">bruh...</slot>
  </div>
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