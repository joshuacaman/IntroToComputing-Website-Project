document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    mobileMenu.addEventListener('click', function () {
        navList.classList.toggle('show');
    });

    // Close menu when close button is clicked
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.navbar') && navList.classList.contains('show')) {
            navList.classList.remove('show');
        }
    });
});

function sendMessage() {
    document.getElementById("successMessage").style.display = "block";
  }

  function closeMessage() {
    document.getElementById("successMessage").style.display = "none";
  }