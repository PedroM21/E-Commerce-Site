const minusButton = document.querySelectorAll(".minusBtn");
const plusButton = document.querySelectorAll(".plusBtn");
const quantitytAmount = document.querySelectorAll(".qtyAmt");
const itemPrice = document.querySelectorAll('.itemPrice')
const totalItemCost = document.querySelectorAll('.totalCost');
const cartQuantity = document.getElementById('cart-qty');
const subtotalValue = document.getElementById('subtotalValue');
const salesTaxValue = document.getElementById('salesTaxValue');
const grandTotalValue = document.getElementById('grandTotalValue');

function UpdateCartTotal () {
    let totalAmount = 0;

    quantitytAmount.forEach(input => {
        totalAmount += parseInt(input.value, 10);
    })

    cartQuantity.textContent = totalAmount;
    console.log(cartQuantity.textContent)
}

function UpdateTotalAmount () {
    let totalPrice = 0;
    let subTotal = parseFloat(subtotalValue.value);
    let salesTaxRate = 0.0625;
    let salesTax = 0;
    let grandTotal = 0;

    quantitytAmount.forEach((input, index) => {
        let quantity = parseInt(input.value, 10);
        let price = parseFloat(itemPrice[index].textContent)
        let totalCost = quantity * price

        totalItemCost[index].textContent = totalCost.toFixed(2);
        totalPrice += totalCost
    });
    subTotal = totalPrice;
    salesTax = subTotal * salesTaxRate;
    grandTotal = subTotal + salesTax;

    subtotalValue.textContent = subTotal.toFixed(2);
    salesTaxValue.textContent = salesTax.toFixed(2);
    grandTotalValue.textContent = grandTotal.toFixed(2);
    console.log(totalPrice);
}

minusButton.forEach((button, index) => {
    button.addEventListener('click', () => {
        let currQty = parseInt(quantitytAmount[index].value, 10);

        if (currQty > 1) {
            quantitytAmount[index].value = currQty - 1;
        } else {
            console.log("Can't lower past 1.")
        }

        UpdateTotalAmount();
        UpdateCartTotal();
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

        UpdateTotalAmount();
        UpdateCartTotal();
    });
});

UpdateCartTotal();
UpdateTotalAmount();