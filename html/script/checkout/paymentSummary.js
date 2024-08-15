import {cart, calculateCartQuantity } from "../data/cart.js";
import { getProduct } from "../data/product.js";

export function renderPaymentSummary() {
    let productPriceCents = 0;
    let cartQuantity = calculateCartQuantity();
    let afterTax = 0;
    let totalProduct = 0;
    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        productPriceCents += product.priceCents * cartItem.quantity;
        afterTax += productPriceCents * 10/100;
        totalProduct = afterTax + productPriceCents;
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
              </button>`
    
    const paymentOrder = document.querySelector('.payment-summary');
    paymentOrder.innerHTML = paymentSummary;
}
