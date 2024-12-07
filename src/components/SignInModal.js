import { LitElement, html, css } from "lit";
import "../../node_modules/@lion/form/lion-form.js";
import "../../node_modules/@lion/input/lion-input.js";
import "../../node_modules/@lion/button/lion-button.js";


export class SignInModal extends LitElement {
  static styles = css`
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      justify-content: center;
      align-items: center;
      z-index: 5;
    }
    .modal.open {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .modal-content {
      background-color: white;
      border-radius: 8px;
      padding: 20px;
      max-width: 400px;
      width: 100%;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .close {
      position: absolute;
      top: 15px;
      right: 15px;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    .buttons {
      display: flex;
      gap: 16px;
      justify-content: center;
      align-items: center;
    }
  `;

  static properties = {
    open: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.open = false; 
    this.username = ''; 
    this.email = ''; 
    this.password = ''; 
  }

  closeModal() {
    this.open = false;
  }

  render() {
    return html`
      <div class="modal ${this.open ? "open" : ""}">
        <div class="modal-content">
          <button class="close" @click=${this.closeModal}>&times;</button>
          <h2>Sign In</h2>
          <lion-form>
            <form>
              <lion-input
                name="username"
                label="Username"
                .modelValue=${this.username}
                @model-value-changed=${(e) =>
                  (this.username = e.target.modelValue)}
              ></lion-input>
              <lion-input
                label="Email"
                name="email"
                type="email"
                .modelValue=${this.email}
                @model-value-changed=${(e) =>
                  (this.email = e.target.modelValue)}
              ></lion-input>
              <lion-input
                name="password"
                label="Password"
                type="password"
                .modelValue=${this.password}
                @model-value-changed=${(e) =>
                  (this.password = e.target.modelValue)}
              ></lion-input>
              <div class="buttons">
                <lion-button type="submit">Sign In</lion-button>
                <lion-button type="submit">Sign Out</lion-button>
              </div>
            </form>
          </lion-form>
        </div>
      </div>
    `;
  }
}

customElements.define("sign-in-modal", SignInModal);