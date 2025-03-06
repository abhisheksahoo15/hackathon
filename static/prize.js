document.addEventListener("DOMContentLoaded", function () {
    const prizeCards = document.querySelectorAll(".prize-card");

    prizeCards.forEach((card) => {
        card.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
        });

        card.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
});
