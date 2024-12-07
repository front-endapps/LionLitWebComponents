import { LitElement, html, css } from "lit";

export class FooterComponent extends LitElement {
  static styles = css`
  footer {
      text-align: center;
      background-color: #a8a8a8;
      position: fixed;
      bottom: 0;
      border-top: 1px solid #ccc;
      width: 100%;
      color: #d70000;
    }
    .titleFooter {
      animation: fadeIn 1.5s;
    }
    @keyframes fadeIn {
      0% {
        opacity: 0;
        
      }
      100% {
        opacity: 1;
        
      }
    }

  `;

  render() {
    return html`
      <footer>
        <h3 class="titleFooter">ING Bank</h3>
        <p>2024</p>
      </footer>

    `;
  }
}

customElements.define("footer-component", FooterComponent);