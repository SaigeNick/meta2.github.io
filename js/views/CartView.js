import CartModel from "../models/CartModel.js";

class CartView {
  constructor() {
    this.cart = new CartModel();
  }
  renderCart() {
    const items = this.cart.getItems();
    const cartContainer = document.querySelector(".cart-items");
    const checkoutContainer = document.querySelector(".card-checkout");
    cartContainer.innerHTML = "";

    let totalAmount = 0;
    items.forEach((item) => {
      const itemAmount = item.price * item.quantity;
      totalAmount += itemAmount;

      const itemElement = document.createElement("div");
      itemElement.classList.add("row-md-4");

      itemElement.innerHTML = `
        <div class="card w-100 mb-4 d-flex flex-row position-relative align-items-center">
          <button class="remove-item btn btn-danger position-absolute top-0 end-0" data-name="${
            item.name
          }">
            <i class="fas fa-times"></i>
          </button>
          <img src="${item.image}" class="w-50" alt="${item.name}" />
          <div class="card-body w-50 d-flex flex-column justify-content-evenly p-0">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            <div class="d-flex justify-content-between align-items-center flex-wrap">
              <div class="item-counter flex-nowrap">
                <span>${item.quantity} item</span>
                <span class="user-select-none">
                  <span class="increase-quantity" role="button" data-name="${
                    item.name
                  }">+</span> |
                  <span class="decrease-quantity" role="button" data-name="${
                    item.name
                  }">-</span>
                </span>
              </div>
              <span class="fs-5">$${(item.price * item.quantity).toFixed(
                2
              )}</span>
            </div>
          </div>
        </div>
      `;
      cartContainer.appendChild(itemElement);
    });
    checkoutContainer.innerHTML = `
    <div class="card-body d-flex flex-column justify-content-between">
      <h5 class="card-title">Total Amount</h5>
      <p class="card-text">$${totalAmount.toFixed(2)}</p>
      <a href="#" class="btn btn-primary">Checkout</a>
    </div>
  `;
    this.addEventListeners();
  }
  addEventListeners() {
    document.querySelectorAll(".increase-quantity").forEach((button) => {
      button.addEventListener("click", (event) => {
        const itemName = event.target.dataset.name;
        this.cart.increaseQuantity(itemName);
        this.renderCart();
      });
    });

    document.querySelectorAll(".decrease-quantity").forEach((button) => {
      button.addEventListener("click", (event) => {
        const itemName = event.target.dataset.name;
        this.cart.decreaseQuantity(itemName);
        this.renderCart();
      });
    });

    document.querySelectorAll(".remove-item").forEach((button) => {
      button.addEventListener("click", (event) => {
        const itemName = event.target.dataset.name;
        this.cart.removeItem(itemName);
        this.renderCart();
      });
    });
  }
}

export default CartView;
