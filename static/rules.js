// Submission Form Validation
document.getElementById("submissionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let teamName = document.getElementById("team-name").value;
    let repoLink = document.getElementById("repo-link").value;
    let demoLink = document.getElementById("demo-link").value;
    let fileUpload = document.getElementById("upload-file").files[0];

    if (teamName === "" || repoLink === "" || demoLink === "" || !fileUpload) {
        document.getElementById("submission-status").textContent = "❌ Please fill in all fields!";
        document.getElementById("submission-status").style.color = "red";
        return;
    }

    document.getElementById("submission-status").textContent = "✅ Submission successful!";
    document.getElementById("submission-status").style.color = "green";

    // Simulate form reset
    setTimeout(() => {
        document.getElementById("submissionForm").reset();
        document.getElementById("submission-status").textContent = "";
    }, 3000);
});
