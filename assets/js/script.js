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

