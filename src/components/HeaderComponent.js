import { LitElement, html, css } from "lit";
import "./SignInModal.js";

export class HeaderComponent extends LitElement {
  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #f0f0f0;
      padding: 15px 20px;
      border-bottom: 1px solid #ccc;
    }
    button {
      background-color: #525199;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #ff6200;
    }
    .logo {
      animation: riseDown 0.5s forwards;
      font-size: 1.9rem;
      color: #ff6200;
      transform: scale(0);
    }
    @keyframes riseDown {
      0% {
        transform: scaleX(0);
      }
      100% {
        transform: scaleX(1);
      }
    }
  `;
  
  toggleModal() {
    const modal = this.shadowRoot.querySelector("sign-in-modal");
    if (modal) {
      modal.open = true;
    }
  }
  render() {
    return html`
      <header>
        <h1 class="logo">ING Bank</h1>
        <button @click=${this.toggleModal}>Sign In</button>
      </header>
      <sign-in-modal></sign-in-modal>
    `;
  }
}

customElements.define("header-component", HeaderComponent);