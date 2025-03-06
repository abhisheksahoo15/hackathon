// Animated Counter Function
function animateCounter(id, target) {
    let count = 0;
    let speed = Math.ceil(target / 100);

    let interval = setInterval(() => {
        count += speed;
        if (count >= target) {
            count = target;
            clearInterval(interval);
        }
        document.getElementById(id).innerText = count;
    }, 50);
}

// Run Counters When Page Loads
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        animateCounter("participants", 1500);
        animateCounter("projects", 300);
        animateCounter("sponsors", 20);
    }, 500);
});

// Smooth Scroll Effect
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});



// Set the Hackathon start date (YYYY, MM - 1, DD, HH, MM, SS)
const hackathonStartDate = new Date(2025, 3, 10, 10, 0, 0).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = hackathonStartDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    } else {
        document.querySelector(".countdown").innerHTML = "<h2>Hackathon Has Started!</h2>";
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initialize countdown on page load
updateCountdown();
