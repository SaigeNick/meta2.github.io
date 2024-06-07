import LoginView from "../views/LoginView.js";
import UserModel from "../models/UserModel.js";

class LoginController {
  constructor() {
    this.loginView = new LoginView();
    this.userModel = UserModel;

    this.loginView.bindLogin(this.handleLogin.bind(this));
  }

  handleLogin(email, password) {
    try {
      const user = this.userModel.login(email, password);
      window.location.href = "profile.html";
    } catch (error) {
      alert(error.message);
    }
  }
}

export default new LoginController();
