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
