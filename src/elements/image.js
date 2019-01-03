const DEFAULT_SIZE = "4_3"

export default class JackImage extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = this.getTemplate();

    const src = `/assets/images/${this.getDimensions()}/${this.getImage()}.jpg`;
    this.div = this.shadowRoot.querySelector('div');
    this.img = this.shadowRoot.querySelector('img');
    this.img.src = src;
    this.img.complete

    if (this.img.complete) {
      onLoaded();
    } else {
      this.img.addEventListener('load', () => this.onLoaded());
      this.img.addEventListener('error', () => console.error('error loading jack-image: ' + src));
    }
  }

  onLoaded() {
    this.div.classList.remove('loading');
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
        }

        div.loading {
          padding-bottom: calc(100% * (3/4));
          background-color: grey;
        }
      </style>
      <div class="loading">
        <img>
      </div>
    `
  }
}

window.customElements.define('jack-image', JackImage);
