document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("register-form");
    const modal = document.getElementById("confirmation-modal");
    const closeModal = document.getElementById("close-modal");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        if (name === "" || email === "") {
            alert("Please fill out all required fields!");
            return;
        }

        // Show the modal
        modal.style.display = "flex";
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal if user clicks outside
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
