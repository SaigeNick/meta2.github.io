class LoginView {
  constructor() {
    this.loginForm = document.querySelector(".form-signin");
  }

  bindLogin(handler) {
    this.loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = this.loginForm.querySelector("#inputEmail").value;
      const password = this.loginForm.querySelector("#inputPassword").value;
      handler(email, password);
    });
  }
}

export default LoginView;
