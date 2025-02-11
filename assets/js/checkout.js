const minusButton = document.querySelectorAll(".minusBtn");
const plusButton = document.querySelectorAll(".plusBtn");
const quantitytAmount = document.querySelectorAll(".qtyAmt");

const cartAmount = document.getElementById('cartAmount');


minusButton.forEach((button, index) => {
    button.addEventListener('click', () => {
        let currQty = parseInt(quantitytAmount[index].value, 10);

        if (currQty > 1) {
            quantitytAmount[index].value = currQty - 1;
        } else {
            console.log("Can't lower past 1.")
        }
    });
});


plusButton.forEach((button, index) => {
    button.addEventListener('click', () => {
        let currQty = parseInt(quantitytAmount[index].value, 10);

        if (currQty < 4) {
            quantitytAmount[index].value = currQty + 1;
        } else {
            console.log("Product limit is 4");
        }
    });
});