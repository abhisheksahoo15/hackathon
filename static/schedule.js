// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

// Close menu when clicking outside
document.addEventListener("click", (event) => {
    const nav = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");
    if (!nav.contains(event.target)) {
        navLinks.classList.remove("active");
    }
});
