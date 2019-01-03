const DEFAULT_SIZE = "4_3"

export default class JackImage extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = this.getTemplate();

    const src = `/assets/images/${this.getDimensions()}/${this.getImage()}.jpg`;
    this.container = this.shadowRoot.getElementById('container');
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
    //this.container.classList.remove('loading');
  }

  getImage() {
    return this.getAttribute('image');
  }

  getDimensions() {
    return this.getAttribute('dimensions') ? this.getAttribute('dimensions') : DEFAULT_SIZE;
  }

  getCalculatedDimensions() {
    const x = this.getDimensions().split("_")[0];
    const y = this.getDimensions().split("_")[1];

    return y / x;
  }

  getTemplate() {
    return `
      <style>
        :host {
          display: block;
        }

        #container {
          width: 100%;
          height: 0;
          padding-bottom: calc(100% * ${this.getCalculatedDimensions()});
          position: relative;
        }

        img {
          width: 100%;
          position: absolute;
          left: 0;
        }
      </style>
      <div id="container" class="loading">
        <img>
      </div>
    `
  }
}

window.customElements.define('jack-image', JackImage);
