AOS.init({
  duration: 800,
  offset: 100,
  once: true,
});

function createAnimatedBackground() {
  const bg = document.getElementById("animatedBg");
  const numCircles = 20;

  for (let i = 0; i < numCircles; i++) {
    const circle = document.createElement("div");
    circle.style.width = Math.random() * 300 + 50 + "px";
    circle.style.height = circle.style.width;
    circle.style.left = Math.random() * 100 + "%";
    circle.style.top = Math.random() * 100 + "%";
    circle.style.animationDelay = Math.random() * 5 + "s";
    circle.style.animationDuration = Math.random() * 10 + 15 + "s";
    bg.appendChild(circle);
  }
}

function downlodCV() {
  window.open("Docs/Binura Namulitha 2024 CV", "_blank");
}

function openProject(url) {
  window.open(url, "_blank");
}

function sendMessage() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const formattedMessage = `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
  const encodedMessage = encodeURIComponent(formattedMessage);

  window.location.href = `mailto:binura.bin02@gmail.com?subject=Portfolio Contact: ${encodeURIComponent(
    name
  )}&body=${encodedMessage}`;
}

function animateSkillBars() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const percentage = progressBar.getAttribute("data-percentage");
          progressBar.style.width = percentage + "%";
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".skill-bar-progress").forEach((bar) => {
    observer.observe(bar);
  });
}

function typeWriter() {
  const text = "Full Stack Developer & UI/UX Designer";
  const typingElement = document.querySelector(".typing-text");
  let index = 0;
  
  // Create cursor element
  const cursor = document.createElement('span');
  cursor.className = 'typing-cursor';
  typingElement.parentNode.insertBefore(cursor, typingElement.nextSibling);

  function type() {
      if (index < text.length) {
          typingElement.textContent += text.charAt(index);
          index++;
          setTimeout(type, 70);
      }
  }

  type();
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  createAnimatedBackground();
  animateSkillBars();
  typeWriter();
});
