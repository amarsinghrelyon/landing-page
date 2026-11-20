document.getElementById("leadForm").addEventListener("submit", function(e){
  e.preventDefault();

  const form = this;
  const response = document.getElementById("response");
  const button = form.querySelector("button");
  button.disabled = true;
  button.innerHTML = "Sending...";

  fetch("sendmail.php", {
    method: "POST",
    body: new FormData(form)
  })
  .then(response => response.text())
  .then(data => {
    response.innerHTML = data;
    form.reset();
  })
  .catch(() => {
    response.innerHTML = "Unable to send your inquiry. Please try again.";
  })
  .finally(() => {
    button.disabled = false;
    button.innerHTML = 'Send inquiry <span>&#8599;</span>';
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("open");
  });
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });
});