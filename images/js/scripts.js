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
<script>
    document.getElementById('quoteRequestForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        var formData = new FormData(this);
        fetch('submit_form.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById('responseMessage').innerHTML = data;
            document.getElementById('responseMessage').style.display = 'block';
            this.reset(); // Reset the form fields
        })
        .catch(error => {
            document.getElementById('responseMessage').innerHTML = 'An error occurred. Please try again later.';
            document.getElementById('responseMessage').style.display = 'block';
        });
    });
</script>
