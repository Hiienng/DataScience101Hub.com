document.addEventListener('DOMContentLoaded', function() {
    const expandableLinks = document.querySelectorAll('.expandable');

    expandableLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>

            // Toggle lớp 'expanded' trên thẻ <ul> con
            const subMenu = link.nextElementSibling;
            subMenu.classList.toggle('expanded');
        });
    });
});
