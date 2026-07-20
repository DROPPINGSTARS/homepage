let newsSliderMoving = false;

function moveNewsSlider(direction) {
  if (newsSliderMoving) return;

  const track = document.getElementById("newsSliderTrack");
  const slides = track.querySelectorAll(".news-slide");
  const slideWidth = slides[0].getBoundingClientRect().width;

  newsSliderMoving = true;

  if (direction === 1) {
    const firstSlide = slides[0];
    const clone = firstSlide.cloneNode(true);

    track.appendChild(clone);
    track.style.transition = "transform 0.7s ease";
    track.style.transform = `translateX(-${slideWidth}px)`;

    setTimeout(() => {
      firstSlide.remove();
      track.style.transition = "none";
      track.style.transform = "translateX(0)";
      newsSliderMoving = false;
    }, 700);
  }

  if (direction === -1) {
    const lastSlide = slides[slides.length - 1];
    const clone = lastSlide.cloneNode(true);

    track.insertBefore(clone, slides[0]);
    track.style.transition = "none";
    track.style.transform = `translateX(-${slideWidth}px)`;

    requestAnimationFrame(() => {
      track.style.transition = "transform 0.7s ease";
      track.style.transform = "translateX(0)";
    });

    setTimeout(() => {
      lastSlide.remove();
      newsSliderMoving = false;
    }, 700);
  }
}

setInterval(() => {
  moveNewsSlider(1);
}, 3500);