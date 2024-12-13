document.addEventListener("DOMContentLoaded", function () {
    // Password visibility toggle
    const passwordToggle = document.querySelector(".password-toggle");
    const passwordInput = document.querySelector("#password");

    passwordToggle.addEventListener("click", function () {
        const type =
            passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        this.classList.toggle("fa-eye");
        this.classList.toggle("fa-eye-slash");
    });

    // Form submission
    const loginForm = document.getElementById("loginForm");
    const spinner = document.querySelector(".spinner-border");
    const alert = document.querySelector(".alert");
    const alertMessage = document.querySelector(".alert-message");

    loginForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        // Show spinner
        spinner.classList.remove("d-none");

        // Get form data
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
    });
});
