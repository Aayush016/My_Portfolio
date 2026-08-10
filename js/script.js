/* =====================================================
                    TYPING ANIMATION
===================================================== */

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "AI Enthusiast",
  "Java Developer",
  "Problem Solver",
];

const typingElement = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const currentRole = roles[roleIndex];

  if (!deleting) {
    typingElement.textContent = currentRole.substring(0, charIndex++);

    if (charIndex > currentRole.length) {
      deleting = true;

      setTimeout(type, 1600);

      return;
    }
  } else {
    typingElement.textContent = currentRole.substring(0, charIndex--);

    if (charIndex < 0) {
      deleting = false;

      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(type, deleting ? 50 : 110);
}

type();
/* =====================================================
                PROGRESS BAR
===================================================== */

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress = (scrollTop / scrollHeight) * 100;

  progressBar.style.width = progress + "%";
});
/* =====================================================
                BACK TO TOP
===================================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});
/* =====================================================
                    COUNTERS
===================================================== */

const counters = document.querySelectorAll(".counter");

const speed = 200;

counters.forEach((counter) => {
  function updateCounter() {
    const target = +counter.dataset.target;

    const count = +counter.innerText;

    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);

      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  }

  updateCounter();
});
/* =====================================================
                SMOOTH SCROLL
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
/* =====================================================
                ACTIVE NAVBAR
===================================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
/* =====================================================
            CONTACT FORM
===================================================== */

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Thank you! Your message has been received.");

  form.reset();
});

/* =====================================================
            NAVBAR SCROLL
===================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
});
