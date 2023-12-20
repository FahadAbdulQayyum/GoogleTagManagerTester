
function addToCartClicked(pd) {
    console.log('presseddd',pd)
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
    event: "add_to_cart",
    ecommerce: {
        currency: "USD",
        value: 7.77,
        items: [
        {
        item_id: pd.id,
        item_name: pd.name,
        affiliation: "Testing PRIV",
        // coupon: "SUMMER_FUN",
        // discount: 2.22,
        // index: 0,
        // item_brand: "Google",
        // item_category: "Apparel",
        // item_category2: "Adult",
        // item_category3: "Shirts",
        // item_category4: "Crew",
        // item_category5: "Short sleeve",
        // item_list_id: "related_products",
        // item_list_name: "Related Products",
        // item_variant: "green",
        // location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
        price: pd.price,
        quantity: 1
        }
        ]
    }
});
    
}

// Function to create product elements
function createProductElement(product) {
    var productDiv = document.createElement('div');
    productDiv.className = 'product';

    var productName = document.createElement('h3');
    productName.textContent = product.name;

    var productPrice = document.createElement('p');
    productPrice.textContent = 'Price: $' + product.price;

    var productImg = document.createElement('img');
    productImg.src = product.url;
    productImg.alt = product.name;

    var productBtn = document.createElement('button');
    productBtn.innerText = 'Add to Cart';
    productBtn.onclick = function() {
        addToCartClicked(product)
    };

    productDiv.appendChild(productImg);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productBtn);

    return productDiv;
}

// Display products on the webpage
var productListDiv = document.getElementById('productList');

(
    async function() {
        const response = await fetch("./products.json")
        const products = await response.json();
        console.log('productstt', products)

        products.forEach(function(product) {
            var productElement = createProductElement(product);
            productListDiv.appendChild(productElement);
        });
    }
)()
