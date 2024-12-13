// Hàm thay đổi trạng thái chỉnh sửa của các trường input và chuyển đổi nút
document.querySelector('form').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Biểu thức chính quy kiểm tra định dạng email

    // Kiểm tra tính hợp lệ của email
    if (!emailRegex.test(email)) {
        event.preventDefault(); // Ngừng gửi form
        alert("Vui lòng nhập địa chỉ email hợp lệ.");
        emailInput.style.border = '2px solid red'; // Đổi màu viền của input thành đỏ để hiển thị lỗi
    } else {
        emailInput.style.border = ''; // Gỡ bỏ viền đỏ khi email hợp lệ
    }
});

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