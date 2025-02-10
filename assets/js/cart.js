const cartQuantity = document.getElementById("cart-qty")
const cartItemsArray = document.querySelectorAll(".cart-items img")

function checkCartQty () {
    let currCartCount = parseInt(cartQuantity, 10);

    cartItemsArray.forEach(item => {
        currCartCount += 1;
    });

    currCartCount = cartQuantity;
    return cartQuantity;
}
console.log(parseInt(cartQuantity))
checkCartQty();