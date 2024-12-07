import { html, fixture, expect } from "@open-wc/testing";
import "../src/components/SignInModal.js";
import "../src/components/HeaderComponent.js";

describe("SignInModal", () => {
  it("should be closed by default", async () => {
    const el = await fixture(html`<sign-in-modal></sign-in-modal>`);
    const modal = el.shadowRoot.querySelector(".modal");
    expect(modal.classList.contains("open")).to.be.false;
  });
  it('should open when the "open" property is set', async () => {
    const el = await fixture(html`<sign-in-modal open></sign-in-modal>`);
    const modal = el.shadowRoot.querySelector(".modal");
    expect(modal.classList.contains("open")).to.be.true;
  });
  it("should allow entering a username", async () => {
    const el = await fixture(html`<sign-in-modal open></sign-in-modal>`);
    const usernameInput = el.shadowRoot.querySelector(
      'lion-input[name="username"]'
    );
    usernameInput.modelValue = "testUser";
    await usernameInput.updateComplete;
    expect(usernameInput.modelValue).to.equal("testUser");
  });
  it("should allow entering an email", async () => {
    const el = await fixture(html`<sign-in-modal open></sign-in-modal>`);
    const emailInput = el.shadowRoot.querySelector('lion-input[name="email"]');
    emailInput.modelValue = "test@gmail.com";
    await emailInput.updateComplete;
    expect(emailInput.modelValue).to.equal("test@gmail.com");
  });
  it("should allow entering a password", async () => {
    const el = await fixture(html`<sign-in-modal open></sign-in-modal>`);
    const passwordInput = el.shadowRoot.querySelector(
      'lion-input[name="password"]'
    );
    passwordInput.modelValue = "Password123.";
    await passwordInput.updateComplete;
    expect(passwordInput.modelValue).to.equal("Password123.");
  });
  debugger;
});