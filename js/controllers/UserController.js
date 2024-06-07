import UserModel from "../models/UserModel.js";
import UserView from "../views/UserView.js";

class UserController {
  constructor() {
    this.userModel = UserModel;
    this.userView = new UserView();
    this.loadUserProfile();
  }

  loadUserProfile() {
    const user = this.userModel.getUser();
    if (user) {
      this.userView.renderUserProfile(user);
    } else {
      window.location.href = "log_in.html";
    }
  }
}

export default new UserController();
