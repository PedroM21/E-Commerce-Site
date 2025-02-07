const productImage = document.getElementById("prodImg");
const minusButton = document.getElementById("minusBtn");
const plusButton = document.getElementById("plusBtn");
const quantitytAmount = document.getElementById("qtyAmt");

productImage.addEventListener('click', () => {
    if (productImage.classList.contains("resize-image")) {
        productImage.classList.remove("resize-image");
    } else {
        productImage.classList.add("resize-image");
    }
})

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