import CartModel from "../models/CartModel.js";

class CatalogueController {
  constructor() {
    this.addCartButtonListeners();
  }

  addCartButtonListeners() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const card = event?.target?.closest(".card");
        const productName = card.querySelector(".card-title").textContent;
        const productPrice = card.querySelector(".card-price").textContent;
        const productDescription = card.querySelector(".card-text").textContent;
        const item = {
          name: productName,
          price: productPrice,
          description: productDescription,
        };
        new CartModel().addItem(item);
      });
    });
  }
}

export default new CatalogueController();
