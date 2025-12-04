const slides = [
  {
    title: "Grow Your Business",
    title2: "Save your time",
    desc: "Save your time",
    bg: "https://sinalite.com/media/images/home-banner-three.jpg?text=Slide+1",
  },
  {
    title: "Increase Your Sales",
    title2: "Save your money",
    desc: "Save your money",
    bg: "https://sinalite.com/media/images/home-banner-four.jpg?text=Slide+2",
  },
  {
    title: "Reach More Customers",
    title2: "Give more choices",
    desc: "Give more choices",
    bg: "https://sinalite.com/media/images/home-banner-three.jpg?text=Slide+3",
  },
  {
    title: "Increase Your Sales",
    title2: "Cut your time",
    desc: "Cut your time",
    bg: "https://sinalite.com/media/images/home-banner-four.jpg?text=Slide+2",
  },
];

let current = 0;

const titleEl = document.getElementById("slide-title");
const titleEl2 = document.getElementById("slide-title-2");
const descEl = document.getElementById("slide-title-3");
const bulletsEl = document.getElementById("hero-bullets");
const heroSection = document.querySelector(".hero-section");

// Create bullets
slides.forEach((_, i) => {
  const bullet = document.createElement("span");
  bullet.addEventListener("click", () => goToSlide(i));
  bulletsEl.appendChild(bullet);
});

function goToSlide(i) {
  current = i;

  // Update text
  titleEl.innerText = slides[i].title;
  titleEl2.innerText = slides[i].title2;
  descEl.innerText = slides[i].desc;

  // Update background
  heroSection.style.backgroundImage = `url(${slides[i].bg})`;

  // Update bullets
  document.querySelectorAll(".hero-bullets span").forEach((b, idx) => {
    b.classList.toggle("active", idx === i);
  });
}

// Auto slide every 5 seconds
setInterval(() => {
  current = (current + 1) % slides.length;
  goToSlide(current);
}, 5000);

// Init first slide
goToSlide(0);

// search for mobile icon
const searchIcon = document.getElementById("mobileSearchIcon");
const searchInput = document.getElementById("mobileSearchInput");

searchIcon.addEventListener("click", () => {
  searchInput.style.display =
    searchInput.style.display === "none" ? "block" : "none";
});

// responsive navbar start
// Toggle mobile menu drawer
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const originalMenuIcon = document.querySelector(".original-menu-icon");
  const closeIcon = document.querySelector(".close-icon");
  const navMenu = document.querySelector(".nav-menu");
  const body = document.body;

  function showCloseHideBars() {
    // hide both bar icons (explicit) and show close
    if (menuIcon) menuIcon.style.display = "none";
    if (originalMenuIcon) originalMenuIcon.style.display = "none";
    if (closeIcon) closeIcon.style.display = "inline-block";
  }

  function hideCloseRestoreBars() {
    // hide close and restore bar icons to let CSS decide their display
    if (closeIcon) closeIcon.style.display = "none";
    if (menuIcon) menuIcon.style.display = "";
    if (originalMenuIcon) originalMenuIcon.style.display = "";
  }

  // OPEN MENU
  menuIcon?.addEventListener("click", function (e) {
    e.stopPropagation();
    navMenu?.classList.add("active");
    body.classList.add("menu-open");
    showCloseHideBars();
  });

  // Also allow originalMenuIcon to open (in case user clicks that one)
  originalMenuIcon?.addEventListener("click", function (e) {
    e.stopPropagation();
    navMenu?.classList.add("active");
    body.classList.add("menu-open");
    showCloseHideBars();
  });

  // CLOSE MENU (click close icon)
  closeIcon?.addEventListener("click", function (e) {
    e.stopPropagation();
    navMenu?.classList.remove("active");
    body.classList.remove("menu-open");
    hideCloseRestoreBars();
  });

  // OUTSIDE CLICK
  document.addEventListener("click", function (e) {
    if (
      navMenu?.classList.contains("active") &&
      !navMenu.contains(e.target) &&
      !(menuIcon && menuIcon.contains(e.target)) &&
      !(originalMenuIcon && originalMenuIcon.contains(e.target)) &&
      !(closeIcon && closeIcon.contains(e.target))
    ) {
      navMenu.classList.remove("active");
      body.classList.remove("menu-open");
      hideCloseRestoreBars();
    }
  });

  // Close on window resize (restore icons)
  window.addEventListener("resize", function () {
    if (window.innerWidth > 991.98) {
      navMenu?.classList.remove("active");
      body.classList.remove("menu-open");
      hideCloseRestoreBars();
    }
  });

  // Safety: ensure close hidden on init (if HTML didn't set it)
  if (closeIcon && closeIcon.style.display === "") {
    closeIcon.style.display = "none";
  }
});

// responsive navbar end
