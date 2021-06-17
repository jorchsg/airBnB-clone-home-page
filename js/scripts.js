document.addEventListener('DOMContentLoaded', () => {

    // Boton flotante en el footer

    const btnFLotante = document.querySelector('.btn-flotante');
    btnFLotante.addEventListener('click', (e) => {
        e.preventDefault();

        //Prevenimos Default Pero ejecutamos el siguiente código
        const footer = document.querySelector('#footer');

        if (footer.classList.contains('activo')) {
            footer.classList.remove('activo');
            btnFLotante.classList.remove('activo');
            btnFLotante.innerText = 'Idioma y Moneda';
        } else {
            footer.classList.add('activo');
            footer.classList.add('activo');
            btnFLotante.innerText = 'X Cerrar';
        }

    });

});