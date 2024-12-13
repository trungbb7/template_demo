document.addEventListener("DOMContentLoaded", () => {
    const plusBtns = document.querySelectorAll(".quantity-btn.plus");
    const minusBtns = document.querySelectorAll(".quantity-btn.minus");

    plusBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const quantityInput = btn.parentElement.querySelector(".quantity-input");
            quantityInput.value = parseInt(quantityInput.value) + 1;
        });
    });

    minusBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const quantityInput = btn.parentElement.querySelector(".quantity-input");
            quantityInput.value = Math.max(parseInt(quantityInput.value) - 1, 0);
        });
    });
});
