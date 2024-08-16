import { cart, calculateCartQuantity } from "../data/cart.js";
import { getProduct } from "../data/product.js";

export function renderPaymentSummary() {
  let productPriceCents = 0;
  let cartQuantity = calculateCartQuantity();
  let afterTax = 0;
  let totalProduct = 0;
  let productOrder = '';
  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;
    afterTax += productPriceCents * 10 / 100;
    totalProduct = afterTax + productPriceCents;
    productOrder += product.name+", ";
  });

  let paymentSummary = `<div class="payment-summary-title">Order Summary</div>
    
              <div class="payment-summary-row">
                <div>Items (${cartQuantity}):</div>
                <div class="payment-summary-money">$${productPriceCents}</div>
              </div>
    
              <div class="payment-summary-row subtotal-row">
                <div>Total before tax:</div>
                <div class="payment-summary-money">$${productPriceCents}</div>
              </div>
    
              <div class="payment-summary-row">
                <div>Estimated tax (10%):</div>
                <div class="payment-summary-money">$${afterTax}</div>
              </div>
    
              <div class="payment-summary-row total-row">
                <div>Order total:</div>
                <div class="payment-summary-money">$${totalProduct}</div>
              </div>
    
              <button class="place-order-button">
                Place your order
              </button>`;

  const paymentOrder = document.querySelector('.payment-summary');
  paymentOrder.innerHTML = paymentSummary;

  const totalQuantityModal = document.querySelector(".total-quantity-modal");
  totalQuantityModal.innerHTML = cartQuantity

  const totalPriceModal = document.querySelector(".total-price-modal")
  totalPriceModal.innerHTML = "$"+totalProduct

  const checkoutModal = document.querySelector("#checkout-modal")

  const orderButton = document.querySelector(".place-order-button");
  orderButton.addEventListener("click", () => {
    checkoutModal.classList.remove("invisible")
    console.log(checkoutModal)

    const checkoutOrderModal = document.querySelector("#submitCheckout");
    checkoutOrderModal.addEventListener("click", () => {
      const fullName = document.querySelector('input[name="name"]');
      const phone = document.querySelector('input[name="phone"]');
      const address = document.querySelector('input[name="address"]');
      
      window.open(`https://api.whatsapp.com/send/?phone=6285183142899&text=Hi admin, I ordered: ${productOrder} with a total price of: $${totalProduct}. Buyer Name: ${fullName.value}. Phone: ${phone.value}. Address: ${address.value}. Please process it!`);
      
    });
    
  });

  document.addEventListener('click', function (event) {
    // If the click is outside the modal and not on the "Place order" button
    if (!checkoutModal.contains(event.target) && !orderButton.contains(event.target)) {
      checkoutModal.classList.add("invisible");
    }
  });
}