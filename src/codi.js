/* Codi js del nostre projecte */

// Obtenim el formulari, les contrasenyes i els missatges.
const formulari = document.getElementById("formulari-registre");
const contrasenya = document.getElementById("registre-password");
const confirmacio = document.getElementById("registre-confirmar");
const error = document.getElementById("error-contrasenya");
const estat = document.getElementById("estat-registre");

// Validem la coincidència de les contrasenyes.
formulari.addEventListener("submit", function(event) {

// Evitem l'enviament perquè encara no tenim backend.
event.preventDefault();

estat.textContent = "";

if (contrasenya.value !== confirmacio.value) {

    // Mostrem l'error i indiquem com corregir-lo.
    error.textContent =
        "Les contrasenyes no coincideixen. Torna a escriure la mateixa contrasenya.";

    // Indiquem que el camp conté un error.
    confirmacio.setAttribute("aria-invalid", "true");
    confirmacio.classList.add("border-red-700");

    // Traslladem el focus al camp que cal corregir.
    confirmacio.focus();

} else {

    // Informem del resultat sense simular un registre real.
    estat.textContent =
        "Validació correcta. La creació de comptes encara no està disponible.";
}
});

// Eliminem els missatges quan l'usuari modifica les contrasenyes.
function netejarMissatges() {
    error.textContent = "";
    estat.textContent = "";
    confirmacio.removeAttribute("aria-invalid");
    confirmacio.classList.remove("border-red-700");
}

contrasenya.addEventListener("input", netejarMissatges);
confirmacio.addEventListener("input", netejarMissatges);