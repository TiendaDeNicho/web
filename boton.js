document.addEventListener('DOMContentLoaded', function() {
    const cuadrosCamisetas = document.querySelectorAll('.camiseta-cuadro');

    cuadrosCamisetas.forEach(cuadro => {
        const botonCambiar = cuadro.querySelector('.boton-cambiar');
        const ladoFrontal = cuadro.querySelector('.lado-frontal');
        const ladoTrasero = cuadro.querySelector('.lado-trasero');

        botonCambiar.addEventListener('click', function() {
            ladoFrontal.classList.toggle('oculto');
            ladoTrasero.classList.toggle('oculto');

            // Cambiar el texto del botón dinámicamente
            if (ladoFrontal.classList.contains('oculto')) {
                botonCambiar.textContent.src = 'img/botonCambiarPersonajes.png';
            } else {
                botonCambiar.textContent.src = 'img/botonCambiarPersonajes.png';
            }
        });
    });
});



