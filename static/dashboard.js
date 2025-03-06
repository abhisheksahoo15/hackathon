// Fake data (can be replaced with API)
const stats = {
    teams: 35,
    projects: 20,
    pending: 5,
};

const recentActivities = [
    "Team Alpha submitted a project",
    "Project Beta was approved",
    "Team Gamma registered",
    "New judge added: Dr. Watson",
];

// Update dashboard stats
document.getElementById("teams-count").innerText = stats.teams;
document.getElementById("projects-count").innerText = stats.projects;
document.getElementById("pending-count").innerText = stats.pending;

// Update recent activities
const activityList = document.getElementById("activity-list");
activityList.innerHTML = "";
recentActivities.forEach(activity => {
    const li = document.createElement("li");
    li.textContent = activity;
    activityList.appendChild(li);
});

// Logout function (demo)
function logout() {
    alert("Logging out...");
    window.location.href = "index.html";
}
