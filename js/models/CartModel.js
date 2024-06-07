class CartModel {
  constructor() {
    this.items = JSON.parse(sessionStorage.getItem("cartItems")) || [];
  }

  addItem(item) {
    const existingItem = this.items.find(
      (existingItem) => existingItem.name === item.name
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      item.quantity = 1;
      this.items.push(item);
    }

    this.saveCart();
  }

  getItems() {
    return this.items.map((item) => {
      if (item.name === "Product 1") {
        item.image = "img/pic1.png";
      } else if (item.name === "Product 2") {
        item.image = "img/pic2.png";
      } else if (item.name === "Product 3") {
        item.image = "img/pic3.png";
      }
      return item;
    });
  }

  increaseQuantity(itemName) {
    const item = this.items.find((item) => item.name === itemName);
    if (item) {
      item.quantity++;
      this.saveCart();
    }
  }

  decreaseQuantity(itemName) {
    const item = this.items.find((item) => item.name === itemName);
    if (item && item.quantity > 1) {
      item.quantity--;
      this.saveCart();
    }
  }

  removeItem(itemName) {
    this.items = this.items.filter((item) => item.name !== itemName);
    this.saveCart();
  }

  saveCart() {
    sessionStorage.setItem("cartItems", JSON.stringify(this.items));
  }
}

export default CartModel;
