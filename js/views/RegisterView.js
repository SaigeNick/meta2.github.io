class RegisterView {
  constructor() {
    this.registerForm = document.querySelector(".form-signup");
  }

  bindRegister(handler) {
    this.registerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = this.registerForm.querySelector("#inputEmail").value;
      const name = this.registerForm.querySelector("#inputName").value;
      const password = this.registerForm.querySelector("#inputPassword").value;
      const confirmPassword = this.registerForm.querySelector(
        "#inputConfirmPassword"
      ).value;
      if (password === confirmPassword) {
        handler(email, name, password);
      } else {
        alert("Passwords do not match");
      }
    });
  }
}

export default RegisterView;
