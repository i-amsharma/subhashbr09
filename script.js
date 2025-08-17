'use strict';

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll("[data-nav-link]");

// Toggle menu open/close
navToggleBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");

  // Switch icons
  const menuIcon = navToggleBtn.querySelector(".menu-icon");
  const closeIcon = navToggleBtn.querySelector(".close-icon");

  menuIcon.style.display = navbar.classList.contains("active") ? "none" : "block";
  closeIcon.style.display = navbar.classList.contains("active") ? "block" : "none";
});

// Close menu after clicking a link
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    navToggleBtn.querySelector(".menu-icon").style.display = "block";
    navToggleBtn.querySelector(".close-icon").style.display = "none";
  });
});
