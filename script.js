function irAPagina(url) {
    window.location.href = url;
}
function irAPagina(url) {
    window.location.href = url;
}

// Menú responsive toggle
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const navbar = document.querySelector(".navbar");

    toggle.addEventListener("click", () => {
        navbar.classList.toggle("open");
    });
});
