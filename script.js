// Add smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Form validation and submission
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    // Simple validation
    if (!data.name || !data.email || !data.message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Simulate form submission
    alert("Thank you for your message! I'll get back to you soon.");
    this.reset();
  });

// Add interactive effects for hobby cards
document.querySelectorAll(".hobby-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05) rotate(1deg)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1) rotate(0deg)";
  });
});

// Dynamic color theme based on user's favorite color
const favColorInput = document.getElementById("favorite-color");
if (favColorInput) {
  favColorInput.addEventListener("change", function () {
    document.documentElement.style.setProperty(
      "--user-accent-color",
      this.value
    );
  });
}

// Add loading animation for embedded content
document.querySelectorAll("iframe").forEach((iframe) => {
  iframe.addEventListener("load", function () {
    this.style.opacity = "1";
  });
  iframe.style.opacity = "0.7";
  iframe.style.transition = "opacity 0.5s ease";
});

// Console easter egg
console.log(
  "%c🚀 Welcome to Ryan Tabios' Profile!",
  "color: #3498db; font-size: 20px; font-weight: bold;"
);
console.log(
  "%cThis page showcases semantic HTML5, responsive design, and modern web development techniques.",
  "color: #2c3e50; font-size: 14px;"
);
