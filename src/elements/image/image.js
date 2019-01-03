export default class JackImage extends HTMLElement {
  constructor() {
    super();
    console.log('Hello, World!');
  }
}

window.customElements.define('jack-image', JackImage);
