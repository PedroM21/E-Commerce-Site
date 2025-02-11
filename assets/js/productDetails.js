const productImage = document.getElementById("prodImg");
const minusButton = document.getElementById("minusBtn");
const plusButton = document.getElementById("plusBtn");
const quantitytAmount = document.getElementById("qtyAmt");
const imageArray = document.querySelectorAll(".image-sidebar img")
const addButton = document.getElementById('addToCartBtn');
const cartAmount = document.getElementById('cartAmount');

const cart = {};

imageArray.forEach(image => {
    image.addEventListener('click', () => {
        imageArray.forEach(img => {
            img.classList.remove("active");
        });
        
        image.classList.add("active");

        productImage.src = image.src;
    })
});

productImage.addEventListener('click', () => {
    if (productImage.classList.contains("resize-image")) {
        productImage.classList.remove("resize-image");
    } else {
        productImage.classList.add("resize-image");
    }
});

minusButton.addEventListener('click', () => {
    let currQty = parseInt(quantitytAmount.value, 10);

    if (currQty > 1) {
        quantitytAmount.value = currQty - 1;
    } else {
        console.log("Can't lower past 1.")
    }
});

plusButton.addEventListener('click', () => {
    let currQty = parseInt(quantitytAmount.value, 10);

    if (currQty < 4) {
       quantitytAmount.value = currQty + 1;
    } else {
        console.log("Product limit is 4");
    }
});

addButton.addEventListener('click', function() {
    const productName = document.querySelector('h2').textContent;
    const productPrice = parseFloat(document.querySelector('p').textContent.replace('$', ''));
    const productQuantity = parseInt(quantitytAmount.value, 10);

    AddToCart(productName, productPrice, productQuantity);
});

function AddToCart (productName, productPrice, productQuantity) {
    if (cart[productName]) {
        const newQuantity = cart[productName].quantity + productQuantity;

        if (newQuantity > 4) {
            cart[productName].quantity = 4;
        } else {
            cart[productName].quantity = newQuantity;
        }

        cart[productName].totalPrice = cart[productName].quantity * productPrice;
    } else {
        cart[productName] = {
            price: productPrice,
            quantity: productQuantity,
            totalPrice: productQuantity * productPrice
        };
    }

    UpdateCartAmount();
    // console.log(cart);
}

function UpdateCartAmount () {
    let totalQuantity = 0;
    for (let product in cart) {
        totalQuantity += cart[product].quantity;
    }

    cartAmount.textContent = totalQuantity;
}