document.addEventListener("DOMContentLoaded", () => {
    // Handle payment method selection
    const paymentOptions = document.querySelectorAll(".payment-option");

    paymentOptions.forEach((option) => {
        option.addEventListener("click", () => {
            // Remove selected class from all options
            paymentOptions.forEach((opt) => opt.classList.remove("selected"));
            // Add selected class to clicked option
            option.classList.add("selected");
            // Check the radio input
            option.querySelector('input[type="radio"]').checked = true;
        });
    });

    // Handle back to cart button
    const backToCartBtn = document.querySelector(".back-to-cart");
    backToCartBtn.addEventListener("click", () => {
        window.location.href = "cart.html";
    });

    // Handle place order button
    const placeOrderBtn = document.querySelector(".place-order-btn");
    placeOrderBtn.addEventListener("click", () => {
        // Add your order placement logic here
        alert("Đặt hàng thành công!");
        // Redirect to order confirmation or orders page
        // window.location.href = 'orders.html';
    });

    // Handle address change button
    const changeAddressBtn = document.querySelector(
        ".shipping-address .btn-outline-primary"
    );
    const addressModal = new bootstrap.Modal(
        document.getElementById("addressModal")
    );

    changeAddressBtn.addEventListener("click", () => {
        // Pre-fill the form with current values
        const currentName = document.querySelector(
            ".shipping-address .name"
        ).textContent;
        const currentPhone = document.querySelector(
            ".shipping-address .phone"
        ).textContent;
        const currentAddress = document.querySelector(
            ".shipping-address .address"
        ).textContent;

        document.getElementById("name").value = currentName;
        document.getElementById("phone").value = currentPhone;
        document.getElementById("address").value = currentAddress;

        addressModal.show();
    });

    // Handle form submission
    document.getElementById("addressForm").addEventListener("submit", (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;

        // Update the address in the checkout page
        const nameElement = document.querySelector(".shipping-address .name");
        const phoneElement = document.querySelector(".shipping-address .phone");
        const addressElement = document.querySelector(".shipping-address .address");

        nameElement.textContent = name;
        phoneElement.textContent = phone;
        addressElement.textContent = address;

        // Close the modal
        addressModal.hide();
    });
});
