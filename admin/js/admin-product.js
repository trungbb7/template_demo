document.addEventListener("DOMContentLoaded", function () {
    // Initialize DataTable with custom options
    const table = new DataTable("#example", {
        language: {
            url: "//cdn.datatables.net/plug-ins/1.13.7/i18n/vi.json",
        },
        columnDefs: [{targets: [0, 1, 2, 3, 4, 5, 6], className: "dt-head-left"}],
        pageLength: 10,
        responsive: true,
    });


    // Add product button
    document.querySelector(".add-btn").addEventListener("click", function () {
        const modal = new bootstrap.Modal(document.getElementById("productModal"));
        modal.show();
    });


    // Handle edit button clicks
    document.querySelectorAll(".edit-product").forEach((button) => {
        button.addEventListener("click", function (e) {
            e.preventDefault();

            // Get the product data from the table row
            const row = this.closest("tr");
            const name = row.cells[0].textContent;
            const category = row.cells[1].textContent;
            const price = row.cells[2].textContent;
            const discount = row.cells[3].textContent;
            const quantity = row.cells[4].textContent;
            const brand = row.cells[5].textContent;

            // Populate the edit modal with the current values
            document.getElementById("editName").value = name;
            document.getElementById("editCategory").value =
                category === "Xe đạp điện" ? "xe-dap" : "xe-may";
            document.getElementById("editPrice").value = price.replace(/[.,]/g, "");
            document.getElementById("editDiscount").value = discount.replace("%", "");
            document.getElementById("editQuantity").value = quantity;
            document.getElementById("editBrand").value = brand;

            // Show the edit modal
            const editModal = new bootstrap.Modal(
                document.getElementById("editProductModal")
            );
            editModal.show();
        });
    });

    // Handle edit form submission
    document
        .getElementById("editProductForm")
        .addEventListener("submit", function (e) {
            e.preventDefault();

            // Add your form submission logic here
            // This is where you would typically send the updated data to your backend

            // Close the modal after submission
            const editModal = bootstrap.Modal.getInstance(
                document.getElementById("editProductModal")
            );
            editModal.hide();
        });

    // Initialize delete modal
    const deleteModal = new bootstrap.Modal(
        document.getElementById("deleteProductModal")
    );
    let productToDelete = null;

    // Add click event listeners to all delete buttons
    document.querySelectorAll(".delete-product").forEach((button) => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            productToDelete = this.closest("tr"); // Store the row to be deleted
            const name = productToDelete.cells[0].textContent;
            document.getElementById("deleteProductName").textContent = `"${name}"`;
            deleteModal.show(); // Show the modal
        });
    });
});
