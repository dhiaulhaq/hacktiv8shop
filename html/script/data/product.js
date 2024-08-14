export function getProduct(productId) {
    let matchingProduct;

    products.forEach((product) => {
        // check if all productId is uqual to cartItem.productId
        //  so matchingProduct only retrieve the data is that matches between productId adn cartItem.productId
        // so can't use the productID imediatelly cuz we can't access the Id thatt we push into cartItem.productID
        if (product.id === productId) {
            matchingProduct = product;
        }
    });
    return matchingProduct
}




export const products = [
    {
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        image: "./image/purepng.com-men-t-shirtclothingmen-t-shirtfashion-dress-shirt-cloth-tshirt-631522326839zoswy.png",
        name: "polo purple-shirts",
        rating: {
            stars: 4.5,
            count: 87
        },
        priceCents: 1090,
        keywords: [
            "socks",
            "sports",
            "apparel"
        ]
    },
    {
        id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        image: "./image/2.png",
        name: "premium black oven ",
        rating: {
            stars: 4,
            count: 127
        },
        priceCents: 2095,
        keywords: [
            "sports",
            "basketballs"
        ]
    },
    {
        id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        image: "./image/3png.png",
        name: "kanken-raven blue daypack",
        rating: {
            stars: 4.5,
            count: 56
        },
        priceCents: 799,
        keywords: [
            "tshirts",
            "apparel",
            "mens"
        ],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png"
    },
    {
        id: "54e0eccd-8f36-462b-b68a-8182611d9add",
        image: "./image/4.png",
        name: "adidas white-red ball",
        rating: {
            stars: 5,
            count: 2197
        },
        priceCents: 1899,
        keywords: [
            "toaster",
            "kitchen",
            "appliances"
        ]
    },
    {
        id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
        image: "./image/5.png",
        name: "Men's buggy's jeans blue",
        rating: {
            stars: 4,
            count: 160
        },
        priceCents: 1699,
        keywords: [
            "shorts",
            "apparel",
            "mens"
        ]
    },
    {
        id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
        image: "./image/6.png",
        name: "black high work's shoes",
        rating: {
            stars: 5,
            count: 846
        },
        priceCents: 3074,
        keywords: [
            "water boiler",
            "appliances",
            "kitchen"
        ]
    },
    {
        id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
        image: "./image/7.png",
        name: "Women's kimberly's bag",
        rating: {
            stars: 4,
            count: 99
        },
        priceCents: 2374,
        keywords: [
            "kleenex",
            "tissues",
            "kitchen",
            "tissues box",
            "napkins"
        ]
    },
    {
        id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
        image: "./image/12.png",
        name: "men's grey poolover's hoodie",
        rating: {
            stars: 4,
            count: 215
        },
        priceCents: 2200,
        keywords: [
            "hats",
            "straw hats",
            "summer",
            "apparel"
        ]
    },
    {
        id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
        image: "./image/9.png",
        name: "white crocodile kid's sandal",
        rating: {
            stars: 4.5,
            count: 52
        },
        priceCents: 1799,
        keywords: [
            "jewelry",
            "accessories",
            "womens"
        ]
    },
    {
        id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
        image: "./image/10.png",
        name: "men's black t-shirt",
        rating: {
            stars: 4.5,
            count: 2465
        },
        priceCents: 1374,
        keywords: [
            "hooded",
            "hoodies",
            "sweaters",
            "womens",
            "apparel"
        ],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png"
    },

]