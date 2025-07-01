document.addEventListener('DOMContentLoaded', function() {
    const imagenesProducto = document.querySelectorAll('.imgCuadro');

    imagenesProducto.forEach(function(imagen) {
        imagen.addEventListener('click', function() {
            const rutaImagenAmpliada = this.src;
            const anchoAmpliado = this.naturalWidth * 1.2;
            const altoAmpliado = this.naturalHeight * 1.2;

            window.open(rutaImagenAmpliada, '_blank', `width=${anchoAmpliado}, height=${altoAmpliado}`);
        });
    });
});