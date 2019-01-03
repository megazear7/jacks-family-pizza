export default class JackImage extends HTMLElement {
  constructor() {
    super();
    console.log('Hello, World!', this);

    const shadowRoot = this.attachShadow({mode: 'open'});

    shadowRoot.innerHTML = `
      <style>
        img {
          max-width: 100%;
        }
      </style>
      <img src="/assets/images/4_3/${this.getAttribute('image')}.jpg">
    `;
  }
}

window.customElements.define('jack-image', JackImage);
