function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("active");
  }
  document.addEventListener("DOMContentLoaded", function () {
    const logoText = document.getElementById("logo-text");
    const cursor = document.querySelector(".cursor");

    const nameText = "MIKE LIGHTCAP";
    let index = 0;

    function typeLogo() {
        logoText.textContent = "";
        index = 0;
        cursor.style.display = "inline"; // Show cursor at start

        const typingInterval = setInterval(() => {
            if (index < nameText.length) {
                logoText.textContent += nameText[index];
                index++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    cursor.style.display = "none"; // Hide cursor after typing
                    setTimeout(typeLogo, 10000); // Restart animation after 10s
                }, 500);
            }
        }, 150); // Adjust speed of typing effect
    }

    typeLogo(); // Start animation on page load
});
