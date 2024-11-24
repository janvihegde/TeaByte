document.getElementById("Status1").onclick = function() {
    this.classList.toggle("clicked"); 
};
document.getElementById("Status2").onclick = function() {
    this.classList.toggle("clicked"); 
};

document.addEventListener('DOMContentLoaded', function () {
    const featuresMenu = document.getElementById('featuresMenu');
    const submenu = featuresMenu.querySelector('.submenu-content');

    // Show the submenu when hovering or focusing
    featuresMenu.addEventListener('mouseenter', () => {
        submenu.style.display = 'block';
    });

    // Hide the submenu when leaving the menu
    featuresMenu.addEventListener('mouseleave', () => {
        submenu.style.display = 'none';
    });

    // Ensure submenu stays visible when hovering over it
    submenu.addEventListener('mouseenter', () => {
        submenu.style.display = 'block';
    });

    submenu.addEventListener('mouseleave', () => {
        submenu.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Feedback form submission logic
    const feedbackForm = document.getElementById('feedbackForm');
    feedbackForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        // Display a confirmation message in the #confirmationMessage div
        const confirmationMessage = document.getElementById('confirmationMessage');
        confirmationMessage.textContent = 'Thank you for your valuable feedback!';
        confirmationMessage.classList.remove('hidden'); // Make the message visible

        // Optionally reset the form fields
        feedbackForm.reset();
    });

    // Dropdown menu logic (if required for featuresMenu)
    const featuresMenu = document.querySelector('.submenu');
    if (featuresMenu) {
        const submenu = featuresMenu.querySelector('.submenu-content');

        // Show submenu when hovering over the menu
        featuresMenu.addEventListener('mouseenter', () => {
            submenu.style.display = 'block';
        });

        // Hide submenu when leaving the menu
        featuresMenu.addEventListener('mouseleave', () => {
            submenu.style.display = 'none';
        });

        // Ensure submenu stays visible when hovering over it
        submenu.addEventListener('mouseenter', () => {
            submenu.style.display = 'block';
        });

        submenu.addEventListener('mouseleave', () => {
            submenu.style.display = 'none';
        });
    }
});
