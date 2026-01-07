function showMessage() {
    alert("Miło mi, że tu jesteś 💖");
};

const links = document.querySelectorAll(".menu a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.style.textDecoration = "underline";
        link.style.fontWeight = "600";
    }
});

const card = document.querySelector(".card");
card.style.opacity = 0;

window.onload = () => {
    card.style.transition = "opacity 1s";
    card.style.opacity = 1;
};