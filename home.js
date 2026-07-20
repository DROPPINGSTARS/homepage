function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}



function toggleMenu() {
  const menu = document.getElementById("hamburgerMenu");
  menu.classList.toggle("active");
}

function closeMenu() {
  const menu = document.getElementById("hamburgerMenu");
  menu.classList.remove("active");
}

setTimeout(() => {
  document.body.classList.add("animation-finished");
}, 4500);