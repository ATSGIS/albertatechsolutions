document.querySelectorAll('.main-nav ul li').forEach(function(item) {
    item.addEventListener('mouseover', function() {
        const dropdown = this.querySelector('.dropdown-menu');
        if (dropdown) {
            dropdown.style.display = 'block';
            dropdown.style.opacity = '1';
        }
    });

    item.addEventListener('mouseout', function() {
        const dropdown = this.querySelector('.dropdown-menu');
        if (dropdown) {
            setTimeout(() => {
                if (!dropdown.matches(':hover')) {
                    dropdown.style.display = 'none';
                    dropdown.style.opacity = '0';
                }
            }, 200); // Delay hiding to allow click on submenu items
        }
    });

    const dropdown = item.querySelector('.dropdown-menu');
    if (dropdown) {
        dropdown.addEventListener('mouseover', function() {
            this.style.display = 'block';
            this.style.opacity = '1';
        });

        dropdown.addEventListener('mouseout', function() {
            this.style.display = 'none';
            this.style.opacity = '0';
        });
    }
});
