// Smooth fade-in effect for sponsors
document.addEventListener("DOMContentLoaded", function () {
    const sponsors = document.querySelectorAll(".sponsor-logos img");
    sponsors.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = "1";
            img.style.transform = "translateY(0)";
        }, index * 150);
    });
});
