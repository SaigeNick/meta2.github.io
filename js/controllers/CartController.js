import CartModel from "../models/CartModel.js";
import CartView from "../views/CartView.js";

class CartController {
  constructor() {
    this.cartView = new CartView();
    this.cartView.renderCart();
    this.addCartButtonListeners();
  }

  addCartButtonListeners() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const card = event.target.closest(".card");
        const productName = card.querySelector(".card-title").textContent;
        const productPrice = card.querySelector(".card-price").textContent;
        const item = {
          name: productName,
          price: productPrice,
        };
        new CartModel().addItem(item);
        this.cartView.renderCart();
      });
    });
  }
}

export default new CartController();
