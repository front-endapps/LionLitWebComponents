import { LitElement, html, css } from "lit";

export class MainSection extends LitElement {
  static styles = css`
     section {
      color: #333333;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: absolute; 
      top: 50%; 
      left: 50%; 
      transform: translate(
        -50%,
        -50%
      ); 
      text-align: center; 
    }

  `;

  render() {
    return html`
      <section>
        <h2>My Sign In Application</h2>
        <p>Please use your credentials to access the app!</p>
      </section>
    `;
  }
}

customElements.define("main-section", MainSection);