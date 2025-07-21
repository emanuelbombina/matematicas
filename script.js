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
function calcularOperacion() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const op = document.getElementById("operacion").value;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultadoOperacion").innerText = "Por favor ingresá ambos números.";
        return;
    }

    let resultado;
    if (op === "+") {
        resultado = num1 + num2;
    } else if (op === "-") {
        resultado = num1 - num2;
    } else if (op === "*") {
        resultado = num1 * num2;
    }

    const simbolo = op === "*" ? "x" : op;

    const resultadoHTML = `
        <pre>
   ${num1}
${simbolo.padStart(2)} ${num2}
-------
   ${resultado}
        </pre>
    `;

    document.getElementById("resultadoOperacion").innerHTML = resultadoHTML;
}
