/* =====================================================
                SCROLL REVEAL
===================================================== */

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

hiddenElements.forEach((element) => {
  observer.observe(element);
});
/* =====================================================
                HERO PARALLAX
===================================================== */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;

  hero.style.backgroundPositionY = offset * 0.4 + "px";
});
/* =====================================================
                FLOATING BLOBS
===================================================== */

const blobs = document.querySelectorAll(".blob");

blobs.forEach((blob, index) => {
  let x = 0;

  setInterval(() => {
    x += 1;

    blob.style.transform = `translateY(${Math.sin(x / 20) * 18}px)
             translateX(${Math.cos(x / 30) * 18}px)`;
  }, 40);
});
/* =====================================================
                RIPPLE BUTTON
===================================================== */

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");

    ripple.classList.add("ripple");

    this.appendChild(ripple);

    const x = e.clientX - this.offsetLeft;

    const y = e.clientY - this.offsetTop;

    ripple.style.left = x + "px";

    ripple.style.top = y + "px";

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});
/* =====================================================
                CURSOR GLOW
===================================================== */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";

  glow.style.top = e.clientY + "px";
});

/* =====================================================
                CARD TILT
===================================================== */

// const cards = document.querySelectorAll(
//   ".project-card,.skill-card,.about-card",
// );

// cards.forEach((card) => {
//   card.addEventListener("mousemove", (e) => {
//     const rect = card.getBoundingClientRect();

//     const x = e.clientX - rect.left;

//     const y = e.clientY - rect.top;

//     const rotateY = (x - rect.width / 2) / 18;

//     const rotateX = -(y - rect.height / 2) / 18;

//     card.style.transform = `perspective(1000px)
//          rotateX(${rotateX}deg)
//          rotateY(${rotateY}deg)
//          scale(1.03)`;
//   });

//   card.addEventListener("mouseleave", () => {
//     card.style.transform = "";
//   });
// });
