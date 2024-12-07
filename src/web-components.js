import { LitElement, html, css } from 'lit';
import './components/HeaderComponent.js';
import './components/FooterComponent.js';
import './components/MainSection.js';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class WebComponents extends LitElement {
  static properties = {
    header: { type: String },
  }

  constructor() {
    super();
    this.header = 'Lion lit app';
  }

  render() {
    return html`
    <header-component></header-component>
    <main-section></main-section>
    <footer-component></footer-component>
    `;
  }
}
customElements.define('web-components', WebComponents);