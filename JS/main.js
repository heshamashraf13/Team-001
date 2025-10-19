const section = document.querySelector("#testimonials");
const scrollContainer = document.querySelector("#scrollContainer");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        scrollContainer.classList.add("animate-scroll");
      } else {
        scrollContainer.classList.remove("animate-scroll");
      }
    });
  },
  { threshold: 0.3 }
);

observer.observe(section);



      fetch("../components/navbar.html")
        .then((response) => response.text())
        .then((data) => {
          document.getElementById("navbar").innerHTML = data;

          const topBar = document.getElementById("top-bar");
          const closeTopBar = document.getElementById("closeTopBar");

          if (topBar && closeTopBar) {
            closeTopBar.addEventListener("click", () => {
              topBar.style.display = "none";
            });
          } else {
            console.error("Top bar elements not found!");
          }
        });

