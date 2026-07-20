let currentNewsYear = 2026;
const minNewsYear = 2025;
const maxNewsYear = 2026;

function updateNewsList(direction = 0) {
    const yearText = document.getElementById("newsYear");
    const newsList = document.getElementById("newsList");
    const items = document.querySelectorAll(".news-list-item");
    const newerButton = document.getElementById("newerYearButton");
    const olderButton = document.getElementById("olderYearButton");

    newsList.classList.add("is-changing");

    yearText.animate(
        [
            { transform: "translateX(0)", opacity: 1 },
            { transform: `translateX(${direction * 24}px)`, opacity: 0 }
        ],
        { duration: 180, easing: "ease", fill: "forwards" }
    );

    setTimeout(() => {
        yearText.textContent = currentNewsYear;

        items.forEach((item) => {
            item.classList.toggle(
                "is-hidden",
                item.dataset.year !== String(currentNewsYear)
            );
        });

        newerButton.classList.toggle("is-hidden", currentNewsYear >= maxNewsYear);
        olderButton.classList.toggle("is-hidden", currentNewsYear <= minNewsYear);

        yearText.animate(
            [
                { transform: `translateX(${-direction * 24}px)`, opacity: 0 },
                { transform: "translateX(0)", opacity: 1 }
            ],
            { duration: 220, easing: "ease", fill: "forwards" }
        );

        newsList.classList.remove("is-changing");
    }, 220);
}

function changeNewsYear(direction) {
    const nextYear = currentNewsYear + direction;

    if (nextYear > maxNewsYear || nextYear < minNewsYear) {
        return;
    }

    currentNewsYear = nextYear;
    updateNewsList(direction);
}

updateNewsList();
