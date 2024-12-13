// Hàm thay đổi trạng thái chỉnh sửa của các trường input và chuyển đổi nút
function toggleEdit() {
    const inputs = document.querySelectorAll('.details-card input');
    const updateButton = document.getElementById('updateButton');
    const emailInput = document.getElementById('email');

    // Nếu đang ở trạng thái "Lưu", kiểm tra các trường nhập không được để trống
    if (updateButton.textContent === "Lưu") {
        let isValid = true; // Cờ để kiểm tra xem tất cả các trường có hợp lệ không

        inputs.forEach(input => {
            if (!input.readOnly && input.value.trim() === "") {
                // Thêm viền đỏ cho các trường để trống
                input.style.border = '2px solid red';
                isValid = false;
            } else if (!input.readOnly) {
                // Xóa viền đỏ nếu trường hợp lệ
                input.style.border = '1px solid #ccc';
            }
        });

        if (!isValid) {
            alert("Vui lòng điền đầy đủ thông tin trước khi lưu.");
            return; // Ngăn không cho chuyển về trạng thái "Cập Nhật"
        }
    }

    // Nếu đang ở trạng thái "Lưu", kiểm tra các trường nhập không được để trống
    if (updateButton.textContent === "Lưu") {
        let isValid = true; // Cờ kiểm tra tất cả các trường
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Biểu thức kiểm tra định dạng email


        // Kiểm tra định dạng email
        if (!emailRegex.test(emailInput.value.trim())) {
            emailInput.style.border = '2px solid red';
            alert("Vui lòng nhập địa chỉ email hợp lệ.");
            isValid = false;
        }

        if (!isValid) {
            return; // Ngăn không cho lưu nếu phát hiện lỗi
        }
    }

    // Chuyển đổi trạng thái chỉnh sửa của các trường input (trừ mật khẩu)
    inputs.forEach(input => {
        if (input.id !== 'password') {
            input.readOnly = !input.readOnly;
            input.style.cursor = input.readOnly ? 'default' : 'text';

            // Cập nhật kiểu giao diện khi chỉnh sửa
            if (!input.readOnly) {
                input.style.border = '1px solid #ccc';  // Border bình thường khi chỉnh sửa
            } else {
                input.style.border = '';  // Gỡ bỏ border khi readonly
                input.style.outline = '';  // Gỡ bỏ outline khi readonly
            }
        }
    });

    // Thay đổi nội dung và kiểu của nút
    if (updateButton.textContent === "Cập Nhật") {
        updateButton.textContent = "Lưu";
        updateButton.classList.remove("custom-update-btn");
        updateButton.classList.add("custom-save-btn");
    } else {
        updateButton.textContent = "Cập Nhật";
        updateButton.classList.remove("custom-save-btn");
        updateButton.classList.add("custom-update-btn");
    }
}

// Kiểm tra mật khẩu và xác nhận mật khẩu trùng nhau
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form[action="login.html"]');
    const newPasswordInput = document.getElementById('new_password');
    const confirmPasswordInput = document.getElementById('confirm_password');

    form.addEventListener('submit', (event) => {
        const newPassword = newPasswordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        // Kiểm tra mật khẩu có trùng nhau không
        if (newPassword !== confirmPassword) {
            confirmPasswordInput.style.border = '2px solid red';
            event.preventDefault(); // Ngăn chặn form gửi đi
            alert("Mật khẩu mới và mật khẩu xác nhận không khớp. Vui lòng kiểm tra lại.");
        }
    });
});

// Hàm toggle hiển thị mật khẩu
function togglePassword(inputId, iconElement) {
    const input = document.getElementById(inputId);
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    iconElement.classList.toggle('fa-eye');
    iconElement.classList.toggle('fa-eye-slash');
}