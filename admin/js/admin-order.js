document.addEventListener("DOMContentLoaded", function () {
    // Initialize DataTable with custom options
    const table = new DataTable("#example", {
        language: {
            url: "//cdn.datatables.net/plug-ins/1.13.7/i18n/vi.json",
        },
        columnDefs: [
            {
                targets: [0, 1, 2, 3, 4, 5, 6],
                className: "dt-head-left dt-body-left",
            },
        ],
        pageLength: 10,
        responsive: true,
    });

    // Add product button
    document.querySelector(".add-btn").addEventListener("click", function () {
        const modal = new bootstrap.Modal(document.getElementById("orderModal"));
        modal.show();
    });

    // Handle delete button clicks
    // Initialize delete modal
    const deleteModal = new bootstrap.Modal(
        document.getElementById("deleteorderModal")
    );
    let productToDelete = null;

    // Add click event listeners to all delete buttons
    document.querySelectorAll(".delete-order").forEach((button) => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            productToDelete = this.closest("tr"); // Store the row to be deleted
            const name = productToDelete.cells[0].textContent;
            document.getElementById("deleteOrderName").textContent = `"${name}"`;
            deleteModal.show(); // Show the modal
        });
    });

    // Handle delete confirmation
    document
        .querySelector("#deleteorderModal .btn-danger")
        .addEventListener("click", function () {
            if (productToDelete) {
                // Here you would typically make an API call to delete the product
                productToDelete.remove(); // Remove the row from the table
                deleteModal.hide(); // Hide the modal
            }
        });

    // Handle edit button clicks
    document.querySelectorAll(".edit-order").forEach((button) => {
        button.addEventListener("click", function (e) {
            e.preventDefault();

            // Get the product data from the table row
            const row = this.closest("tr");
            const orderId = row.cells[0].textContent;
            const customerId = row.cells[1].textContent;
            const totalPrice = parseInt(row.cells[2].textContent.replaceAll(".", ""));
            const status = row.cells[3].textContent;
            const orderDate = row.cells[4].textContent;
            const deliveryDate = row.cells[5].textContent;

            const statusOptions = {
                "Chờ xác nhận": "cho-xac-nhan",
                "Đang giao": "dang-giao",
                "Đã giao": "da-giao",
            };
            // Populate the edit modal with the current values
            document.getElementById("editOrderId").value = orderId;
            document.getElementById("editCustomerId").value = customerId;
            document.getElementById("editTotalPrice").value = totalPrice;
            document.getElementById("editOrderStatus").value = statusOptions[status];
            document.getElementById("editOrderDate").value = orderDate;
            document.getElementById("editDeliveryDate").value = deliveryDate;
            statusOptions[status];

            // Show the edit modal
            const editModal = new bootstrap.Modal(
                document.getElementById("editorderModal")
            );
            editModal.show();
        });
    });

    // Handle edit form submission
    document
        .getElementById("editOrderForm")
        .addEventListener("submit", function (e) {
            e.preventDefault();

            // Add your form submission logic here
            // This is where you would typically send the updated data to your backend

            // Close the modal after submission
            const editModal = bootstrap.Modal.getInstance(
                document.getElementById("editorderModal")
            );
            editModal.hide();
        });
});
