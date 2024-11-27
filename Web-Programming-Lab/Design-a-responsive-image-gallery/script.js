// Modal logic
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalCaption = document.getElementById("modal-caption");
const closeBtn = document.getElementById("close");

const figures = document.querySelectorAll(".gallery figure");

figures.forEach((figure) => {
    figure.addEventListener("click", () => {
        const img = figure.querySelector("img");
        const caption = figure.querySelector("figcaption").textContent;

        modal.style.display = "flex";
        modalImg.src = img.src;
        modalCaption.textContent = caption;
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
