const toggleBtn = document.getElementById("toggle-theme");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
});


const sections = document.querySelectorAll("section");
const options = { threshold: 0.1 };

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});
