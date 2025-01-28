let currentIndex = 0;
const item = document.querySelectorAll(".item")
const prevButton = document.getElementById("prevBtn")
const nextButton = document.getElementById("nextBtn")

function showProduct(index) {

    currentIndex = (index + item.length) % item.length; // wraps the index to stay in bounds
    item.forEach((element) => element.classList.remove("active")); // removes active tag from all items
    item[currentIndex].classList.add("active"); // adds the active tag to current item

    // console.log(`Active product index: ${currentIndex}`);
}

prevButton.addEventListener("click", () => {
    showProduct(currentIndex - 1);
});

nextButton.addEventListener("click", () => {
    showProduct(currentIndex + 1);
});

showProduct(currentIndex);