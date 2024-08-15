import { calculateCartQuantity, addToCart } from "./data/cart.js";
import { products } from "./data/product.js";
import formatCurrency from "./utils/money.js";


let productsHTML = '';
products.forEach((product) => {
    productsHTML +=
        ` <div class="card-container w-48 m-4 shadow-2xl hover:shadow-slate-800 transition-all duration-200 group hover:translate-y-2   bg-[#DDE0DC] shadow-slate-500 rounded-lg  items-center grid">
                <div class="product-image-container flex   rounded-t-lg justify-center bg-slate-">
                    <img class="max-h-44 "
                        src="${product.image}"
                        alt="">
                </div>
                <div class="description-card  justify-center gap-2 ml-2 grid ">
                    <h3 id="name" class="text-lg font-semibold">${product.name}</h3>
                    <div id="rating-star" class="flex">
                        <img class="h-4" src="image/icon/rating-${product.rating.stars * 10}.png" alt="">
                        <div class="rating-count-quntity">${product.rating.count}</div>

                    </div>
                    <div id="price" class="mt-1 font-medium">$${formatCurrency(product.priceCents)}</div>
                    <div class="product-quantity-container">
                        <select class="js-quantity-selector-${product.id}">
                            <option selected value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div class ="w-full flex justify-center mb-2">
                    <button class= "js-add-to-cart bg-[#F68C11] w-36 rounded-[0.91rem] bg-opacity-80 pb px-2 my-2 py-1" data-product-id="${product.id}">
                        <div>  add to cart</div>
                    </button>
                    </div>
                </div>
            </div>`;

});
const containerProduct = document.querySelector(".products-grid")
containerProduct.innerHTML = productsHTML




// update the quantity of the cart image above
function updateCartQuantity() {
    const cartQuantity = calculateCartQuantity();


    document.querySelector('.js-cart-quantity')
        .innerHTML = cartQuantity

}




const cartButton = document.querySelectorAll('.js-add-to-cart')
console.log(cartButton)
cartButton.forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        addToCart(productId);

        updateCartQuantity();

    });
});
updateCartQuantity()