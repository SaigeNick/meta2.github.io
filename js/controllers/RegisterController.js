import RegisterView from "../views/RegisterView.js";
import UserModel from "../models/UserModel.js";

class RegisterController {
  constructor() {
    this.registerView = new RegisterView();
    this.userModel = UserModel;

    this.registerView.bindRegister(this.handleRegister.bind(this));
  }

  handleRegister(email, name, password) {
    const user = this.userModel.register(email, name, password);
    window.location.href = "log_in.html";
  }
}

export default new RegisterController();
