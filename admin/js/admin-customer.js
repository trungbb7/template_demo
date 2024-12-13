document.addEventListener("DOMContentLoaded", function () {
    // Initialize DataTable with custom options
    const table = new DataTable("#example", {
        language: {
            url: "//cdn.datatables.net/plug-ins/1.13.7/i18n/vi.json",
        },
        columnDefs: [{targets: [0, 1, 2, 3, 4, 5], className: "dt-head-left"}],
        pageLength: 10,
        responsive: true,
    });

    // Add product button
    document.querySelector(".add-btn").addEventListener("click", function () {
        const modal = new bootstrap.Modal(document.getElementById("customerModal"));
        modal.show();
    });

    // Handle delete button clicks
    // Initialize delete modal
    const deleteModal = new bootstrap.Modal(
        document.getElementById("deleteCustomerModal")
    );
    let productToDelete = null;

    // Add click event listeners to all delete buttons
    document.querySelectorAll(".delete-customer").forEach((button) => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            productToDelete = this.closest("tr"); // Store the row to be deleted
            const name = productToDelete.cells[0].textContent;
            document.getElementById("deleteCustomerName").textContent = `"${name}"`;
            deleteModal.show(); // Show the modal
        });
    });

    // Handle delete confirmation
    document
        .querySelector("#deleteCustomerModal .btn-danger")
        .addEventListener("click", function () {
            if (productToDelete) {
                // Here you would typically make an API call to delete the product
                productToDelete.remove(); // Remove the row from the table
                deleteModal.hide(); // Hide the modal
            }
        });

    // Handle edit button clicks
    document.querySelectorAll(".edit-customer").forEach((button) => {
        button.addEventListener("click", function (e) {
            e.preventDefault();

            // Get the product data from the table row
            const row = this.closest("tr");
            const id = row.cells[0].textContent;
            const name = row.cells[1].textContent;
            const email = row.cells[2].textContent;
            const phoneNumber = row.cells[3].textContent;
            const status = row.cells[4].textContent;

            const statusOptions = {
                "Kích hoạt": "kich-hoat",
                "Chưa kích hoạt": "chua-kich-hoat",
                "Bị khóa": "bi-khoa",
            };
            // Populate the edit modal with the current values
            document.getElementById("editCustomerId").value = id;
            document.getElementById("editCustomerName").value = name;
            document.getElementById("editCustomerEmail").value = email;
            document.getElementById("editCustomerPhoneNumber").value = phoneNumber;
            document.getElementById("editCustomerStatus").value =
                statusOptions[status];

            // Show the edit modal
            const editModal = new bootstrap.Modal(
                document.getElementById("editCustomerModal")
            );
            editModal.show();
        });
    });

    // Handle edit form submission
    document
        .getElementById("editCustomerForm")
        .addEventListener("submit", function (e) {
            e.preventDefault();

            // Add your form submission logic here
            // This is where you would typically send the updated data to your backend

            // Close the modal after submission
            const editModal = bootstrap.Modal.getInstance(
                document.getElementById("editCustomerModal")
            );
            editModal.hide();
        });
});
