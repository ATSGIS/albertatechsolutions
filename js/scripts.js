document.querySelectorAll('.main-nav ul li').forEach(item => {
    const dropdown = item.querySelector('.dropdown-menu');

    item.addEventListener('mouseover', () => {
        if (dropdown) {
            dropdown.style.display = 'block';
            dropdown.style.opacity = '1';
        }
    });

    item.addEventListener('mouseout', () => {
        if (dropdown) {
            setTimeout(() => {
                if (!dropdown.matches(':hover')) {
                    dropdown.style.display = 'none';
                    dropdown.style.opacity = '0';
                }
            }, 200);
        }
    });

    if (dropdown) {
        dropdown.addEventListener('mouseover', () => {
            dropdown.style.display = 'block';
            dropdown.style.opacity = '1';
        });

        dropdown.addEventListener('mouseout', () => {
            dropdown.style.display = 'none';
            dropdown.style.opacity = '0';
        });
    }
});
