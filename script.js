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
function realizarSuma() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultadoSuma").innerText = "Por favor ingresá ambos números.";
        return;
    }

    const suma = num1 + num2;

    // Mostrar como una suma tradicional
    const resultadoHTML = `
        <pre>
   ${num1}
+  ${num2}
-------
   ${suma}
        </pre>
    `;

    document.getElementById("resultadoSuma").innerHTML = resultadoHTML;
}
