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
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');
    const mobileSearchIcon = document.getElementById('mobileSearchIcon');
    const mobileSearchInput = document.getElementById('mobileSearchInput');
    const body = document.body;
    
    // Toggle mobile menu drawer
    if (menuIcon) {
        menuIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            body.classList.toggle('menu-open');
            this.classList.toggle('fa-bars');
            this.classList.toggle('fa-times');
        });
    }
    
    // Toggle mobile search input
    if (mobileSearchIcon && mobileSearchInput) {
        mobileSearchIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileSearchInput.classList.toggle('active');
            
            // Focus on input when opened
            if (mobileSearchInput.classList.contains('active')) {
                setTimeout(() => {
                    const input = mobileSearchInput.querySelector('input');
                    if (input) input.focus();
                }, 100);
            }
        });
        
        // Close search when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileSearchInput.contains(e.target) && !mobileSearchIcon.contains(e.target)) {
                mobileSearchInput.classList.remove('active');
            }
        });
    }
    
    // Close menu when clicking on a link (optional)
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 991.98) {
                navMenu.classList.remove('active');
                body.classList.remove('menu-open');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !menuIcon.contains(e.target)) {
            navMenu.classList.remove('active');
            body.classList.remove('menu-open');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 991.98) {
            navMenu.classList.remove('active');
            body.classList.remove('menu-open');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });
});
// responsive navbar end
