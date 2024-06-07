// Lấy tất cả các biểu tượng có class "toggle-icon"
var toggleIcons = document.querySelectorAll('.toggle-icon');

// Thêm sự kiện click cho từng biểu tượng
toggleIcons.forEach(function(icon) {
  icon.addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của biểu tượng

    // Lấy menu con tương ứng với biểu tượng
    var subMenu = this.parentElement.nextElementSibling;

    // Hiển thị/ẩn menu con
    if (subMenu.style.display === 'none') {
      subMenu.style.display = 'block';
      this.textContent = '▼'; // Thay đổi biểu tượng
    } else {
      subMenu.style.display = 'none';
      this.textContent = '▶'; // Thay đổi biểu tượng
    }
  });
});

.main-content li {
    margin-left: 20px; /* Thụt đầu dòng cho các mục li trong phần nội dung */
}