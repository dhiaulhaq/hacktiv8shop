import {cart, removeFromCart} from "../data/cart.js";
import {getProduct} from "../data/product.js"
import { renderPaymentSummary } from "./paymentSummary.js";


export function renderOrderSummary() {
    let cartSummary = '';

    cart.forEach(cartItem => {
        let cartItemId = cartItem.productId;
        const matchingProduct = getProduct(cartItemId);

        
        cartSummary += `<div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
                    <div class="cart-item-details-grid">
                      <img class="product-image" src="${matchingProduct.image}" />
                      <div class="cart-item-details">
                        <div class="row" style="display: flex; justify-content: space-between;">
                          <div class="product-name">
                          ${matchingProduct.name}
                          </div>
                          <div class="product-price sm:absolute sm:right-0">$${matchingProduct.priceCents}</div>
                        </div>
                        <div class="product-quantity">
                          <span> Quantity: <span class="quantity-label">${cartItem.quantity}</span> </span> || 
                          <span class="delete-quantity-link link-primary-${matchingProduct.id}" data-product-id="${matchingProduct.id}">
                            Delete
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>`;
    });
    const orderSummary = document.querySelector(".order-summary");
    orderSummary.innerHTML = cartSummary;
    
    const deleteOrder = document.querySelectorAll(".delete-quantity-link");
    
    deleteOrder.forEach(link => {
        link.addEventListener('click',()=>{
            
            const productId = link.dataset.productId;
            removeFromCart(productId);
            // const container = document.querySelector(`js-cart-item-container-${matchingProduct.id}`);
            // container.remove();
            renderOrderSummary();
            renderPaymentSummary();
        });
        
    });
}





