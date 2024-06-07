class UserModel {
  static register(email, name, password) {
    const user = { email, name, password };
    sessionStorage.setItem("user", JSON.stringify(user));
    return user;
  }

  static login(email, password) {
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      return storedUser;
    } else {
      throw new Error("Invalid email or password");
    }
  }

  static getUser() {
    return JSON.parse(sessionStorage.getItem("user"));
  }

  static logout() {
    sessionStorage.removeItem("user");
  }
}

export default UserModel;
