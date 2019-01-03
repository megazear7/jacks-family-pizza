const DEFAULT_SIZE = "4_3"

export default class JackImage extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});
    const imageSrc = `/assets/images/${this.getDimensions()}/${this.getImage()}.jpg`;

    shadowRoot.innerHTML = this.getTemplate();
    this.shadowRoot.querySelector('img').src = imageSrc;
  }

  getImage() {
    return this.getAttribute('image');
  }

  getDimensions() {
    return this.getAttribute('dimensions') ? this.getAttribute('dimensions') : DEFAULT_SIZE;
  }

  getTemplate() {
    return `
      <style>
        img {
          max-width: 100%;
        }
      </style>
      <img>
    `
  }
}

window.customElements.define('jack-image', JackImage);
