import cart from "../data/cart.js";
import {getProduct} from "../data/product.js"

let cartSummary = '';

export function renderOrderSummary(params) {
    
    cart.forEach(cartItem => {
        let cartItemId = cartItem.productId;
        let matchingProduct = getProduct(cartItemId);
        console.log(matchingProduct);
        
        // cartSummary += `<div class="cart-item-container">
        //             <div class="cart-item-details-grid">
        //               <img class="product-image" src="${matchingProduct.image}" />
        //               <div class="cart-item-details">
        //                 <div class="row" style="display: flex; justify-content: space-between;">
        //                   <div class="product-name">
        //                   ${matchingProduct.name}
        //                   </div>
        //                   <div class="product-price">$${matchingProduct.priceCents}</div>
        //                 </div>
        //                 <div class="product-quantity">
        //                   <span> Quantity: <span class="quantity-label">${cartItem.quantity}</span> </span>
        //                   <span class="update-quantity-link link-primary">
        //                     Update
        //                   </span>
        //                   <span class="delete-quantity-link link-primary">
        //                     Delete
        //                   </span>
        //                 </div>
        //               </div>
        //             </div>
        //           </div>`
    });
}

const orderSummary = document.querySelector(".order-summary");
orderSummary.innerHTML = cartSummary;





