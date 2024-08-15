import cart from "../data/cart.js";
import { cart, removeFromCart, updateDeliveryOption, updateQuantity } from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { formatCurrency } from '../utils/money.js';
import { hello } from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { deliveryOptions, calculateDeliveryDate } from '../../data/deliveryOptions.js';
import renderCheckoutHeader from './checkoutHeader.js';

import { renderPaymentSummary } from './paymentSummary.js';

export function renderOrderSummary() {



    let cartSummaryHTML = '';


    // this called view = save the data and generate all of the page
    cart.forEach((cartItem) => {
        // make the productID out from cartItem first
        // use this for serach the full product
        // use the productid to generate all of html that we add to cart
        const productId = cartItem.productId;

        const matchingProduct = getProduct(productId)

        const deliveryOptionId = cartItem.deliveryOptionId;
        // to get full deliveryOption
        const dateString = calculateDeliveryDate(deliveryOptionId)

        // default value for our page
        cartSummaryHTML += `
    <div class="cart-item-container js-cart-item-container
      js-cart-item-container-${matchingProduct.id}">
      <div class="delivery-date">
        Delivery date: ${dateString}
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name js-product-name-${matchingProduct.id}">
            ${matchingProduct.name}
          </div>
          <div class="product-price js-product-price-${matchingProduct.id}">
            $${formatCurrency(matchingProduct.priceCents)}
          </div>
          <div class="product-quantity js-product-quantity-${matchingProduct.id}">
            <span>
              Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary js-update-link" data-product-id="${matchingProduct.id}">
              Update
            </span>
           
               <input class="quantity-input js-quantity-input-${matchingProduct.id}">
            <span class="save-quantity-link link-primary js-save-link" data-product-id="${matchingProduct.id}">Save</span>
            <span class="delete-quantity-link link-primary js-delete-link js-delete-link-${matchingProduct.id}" 
            data-product-id="${matchingProduct.id}">
              Delete
            </span>
          </div>
        </div>
 
        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
         ${deliveryOptionsHTML(matchingProduct, cartItem)}
          
          
        </div>
      </div>
    </div>
  `;
    });


    function deliveryOptionsHTML(matchingProduct, cartItem) {
        let html = '';
        
        deliveryOptions.forEach((deliveryOption) => {
            const today = dayjs();
            const deliveryDate = today.add(
                deliveryOption.deliveryDays,
                'days'
            );
            const dateString = deliveryDate.format(
                'dddd, MMM D'
            );


            const priceString = deliveryOption.priceCents === 0
                ? 'FREE'
                : ` $${formatCurrency(deliveryOption.priceCents)} -`;
            const isChecked = deliveryOption.id ===
                cartItem.deliveryOptionId;
            html += `
        <div class="delivery-option js-delivery-option 
        js-delivery-option-${matchingProduct.id}-${deliveryOption.id}"
          data-product-id="${matchingProduct.id}"
        data-product-id="${matchingProduct.id}"data-delivery-option-id="${deliveryOption.id}">
            <input type="radio"
            ${isChecked ? 'checked' : ''} 
              class="delivery-option-input js-delivery-input js-delivery-option-input-${matchingProduct.id}-${deliveryOption.id}">
            <div>
              <div class="delivery-option-date">
                ${dateString}
              </div>
              <div class="delivery-option-price">
                ${priceString} - Shipping
              </div>
            </div>
          </div>
`

        });

        return html;
    }
    document.querySelector('.js-order-summary')
        .innerHTML = cartSummaryHTML;




    //  this event listener called controller 
    //  that runs some code when we interact with the page

    document.querySelectorAll('.js-delete-link')
        .forEach((link) => {
            link.addEventListener('click', () => {
                // nama dasetnya sesuai sama nama variabvel ya
                const productId = link.dataset.productId;
                removeFromCart(productId);
                // const container = document.querySelector(
                //   `.js-cart-item-container-${productId}`
                // );
                // container.remove();
                //  instead of using code above we use this to renmder page ditrecly
                renderOrderSummary();
                renderCheckoutHeader()
                // update the payment when we delete the item from the cart
                renderPaymentSummary();

            });
        });
    renderCheckoutHeader()

    document.querySelectorAll('.js-update-link')
        .forEach((link) => {
            link.addEventListener('click', () => {
                const productId = link.dataset.productId;
                const container = document.querySelector(`.js-cart-item-container-${productId}`);

                container.classList.add('is-editing-quantity');
                renderPaymentSummary();
            });

        });
    document.querySelectorAll('.js-save-link')
        .forEach((link) => {
            link.addEventListener('click', () => {
                const productId = link.dataset.productId;


                const quantityInput = document.querySelector(`.js-quantity-input-${productId}`
                );
                const newQuantity = Number(quantityInput.value);

                if (newQuantity < 0 || newQuantity >= 1000) {
                    alert('Quantity must be at least 0 and less than 1000');
                    return
                }
                // update the quantity of matchingProduct
                updateQuantity(productId, newQuantity);

                const container = document.querySelector(`.js-cart-item-container-${productId}`
                );
                container.classList.remove('is-editing-quantity');
                // const quantityLabel = document.querySelector(`.js-quantity-label-${productId}`

                // );
                // quantityLabel.innerHTML = newQuantity;/
                // render the all of this code we use this to ensure that all data is up to date with the lastes state of the aplication
                renderOrderSummary();
                renderCheckoutHeader()
                // update the quantity of the paynmentSummary
                renderPaymentSummary();

            });
        });
    document.querySelectorAll('.js-delivery-option')
        .forEach((element) => {
            element.addEventListener('click', () => {
                const { productId, deliveryOptionId } = element.dataset
                updateDeliveryOption(productId, deliveryOptionId)
                // re run all this code and regenrate all the HTML
                //  so itwill update all off data we changed
                // isntead using the dom and changing one by one we just update the data and then regenerate it
                renderOrderSummary()
                renderPaymentSummary();
            });
        });

}
export default renderOrderSummary;
// mvc
// module view controler 
