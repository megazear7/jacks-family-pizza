const DEFAULT_SIZE = "4_3"

export default class JackImage extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = this.getTemplate();

    const src = `/assets/images/${this.getDimensions()}/${this.getImage()}.jpg`;
    this.img = this.shadowRoot.querySelector('img');
    this.img.src = src;
    this.img.complete

    if (this.img.complete) {
      onLoaded()
    } else {
      this.img.addEventListener('load', () => this.onLoaded());
      this.img.addEventListener('error', () => alert('error'));
    }
  }

  onLoaded() {
    this.img.classList.remove('loading');
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
          width: 100%;
          height: 100%;
          background-color: grey;
        }

        img.loading {
          padding-bottom: calc(100% * (3/4));
        }
      </style>
      <img class="loading">
    `
  }
}

window.customElements.define('jack-image', JackImage);
