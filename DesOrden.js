document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.querySelector(".contenedor-camisetas");
    const elementos = Array.from(contenedor.children); // Obtiene solo los hijos de .contenedor-camisetas

    // Mezcla aleatoriamente los elementos
    const elementosMezclados = elementos.sort(() => Math.random() - 0.5);

    // Vacía el contenedor y vuelve a agregar los elementos en el nuevo orden
    contenedor.innerHTML = "";
    elementosMezclados.forEach(elemento => contenedor.appendChild(elemento));
});