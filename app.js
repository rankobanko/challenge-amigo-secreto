let amigos = [];
const STORAGE_KEY = "amigos_amigo_secreto_v1";

// Guardar en localStorage
function guardarLocal() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(amigos));
}

// Cargar desde localStorage
function cargarLocal() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) amigos = JSON.parse(data);
}

// Normalizar nombre
function normalizarNombre(nombre) {
    nombre = nombre.trim();
    return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

// Verificar duplicado
function existeNombre(nombre) {
    return amigos.some(a => a.toLowerCase() === nombre.toLowerCase());
}

// Agregar amigo (sin mostrar lista)
function agregarAmigo() {
    const input = document.getElementById("amigo");
    let nombre = normalizarNombre(input.value);
    if (!nombre) {
        alert("Por favor ingresa un nombre válido.");
        return;
    }
    if (existeNombre(nombre)) {
        alert("Ese nombre ya fue agregado.");
        return;
    }
    amigos.push(nombre);
    guardarLocal();
    input.value = "";
    alert("Amigo agregado correctamente ✅");
}

// Sortear un amigo secreto aleatorio
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para sortear.");
        return;
    }
    // Elegir un amigo aleatorio
    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indice];

    // Mostrar resultado directamente
    const ul = document.getElementById("resultado");
    ul.innerHTML = `<li>Tu amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
    cargarLocal();

    // Soporte tecla Enter
    document.getElementById("amigo").addEventListener("keydown", (e) => {
        if (e.key === "Enter") agregarAmigo();
    });
});