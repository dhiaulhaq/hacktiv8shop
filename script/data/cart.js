export let cart;

loadFromStorage();

export function loadFromStorage() {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart) {
        cart = [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '1'
        }, {
            productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 1,
            deliveryOptionId: '1'
        }];
    }
}

export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}


export function addToCart(productId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });
    const select = document.querySelector(`.js-quantity-selector-${productId}`);
    const quantity = Number(select.value)
    if (matchingItem) {
        matchingItem.quantity += quantity;
    } else {
        cart.push({
            productId: productId,
            quantity: quantity,
            deliveryOptionId: '1',
        });
    }
    console.log(cart)
    saveToStorage();
}


export function calculateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity
    })
    return cartQuantity
    // let cartQuantity = 0;

    // cart.forEach((cartItem) => {
    //   cartQuantity += cartItem.quantity;
    // });

    // elementItem.innerHTML = cartQuantity;
    // const checkoutHeader = document.querySelector('.checkout-link-js');
    // checkoutHeader.innerHTML = cartQuantity;

    // const jsCartQuantity = document.querySelector('.js-cart-quantity');
    // jsCartQuantity.innerHTML = cartQuantity;

}




export function updateQuantity(productId, newQuantity) {
    let matchingItem;
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem
        }
    });
    matchingItem.quantity = newQuantity;
    saveToStorage();
}
// loop through the cart and find the product
// update the deliveryOptionsId of the product
export function removeFromCart(productId) {
    const newCart = [];
    //so this function well iterate through the cart and check each id from cartItem is not equal to productId so the productId only has one Id that we click in delete button in the checkout.js this well add all of cartItem.id into newcartn except the id of the product we click cmiww
    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorage();
}
export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem
        }
    });
    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToStorage();
}

export default cart;