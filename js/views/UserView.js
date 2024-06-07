class UserView {
  constructor() {
    this.profileName = document.querySelector(".user-profile .name");
    this.profileEmail = document.querySelector(".user-profile .email");
  }

  renderUserProfile(user) {
    this.profileName.textContent = user.name;
    this.profileEmail.textContent = user.email;
  }
}

export default UserView;
