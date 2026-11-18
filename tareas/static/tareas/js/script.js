// JavaScript global de Gestión de Tareas (cargado desde base.html)
document.addEventListener('DOMContentLoaded', function () {

    // 1) Marca como activo el enlace del menú que coincide con la URL actual
    var enlaces = document.querySelectorAll('.menu a[href]');
    enlaces.forEach(function (enlace) {
        if (enlace.getAttribute('href') === window.location.pathname) {
            enlace.classList.add('activo');
        }
    });

    // 2) Botón "volver arriba": aparece al bajar y sube al pulsarlo
    var boton = document.getElementById('volver-arriba');
    window.addEventListener('scroll', function () {
        boton.classList.toggle('visible', window.scrollY > 200);
    });
    boton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 3) Cierra los desplegables del menú al hacer clic fuera
    document.addEventListener('click', function (evento) {
        document.querySelectorAll('.menu details[open]').forEach(function (d) {
            if (!d.contains(evento.target)) {
                d.removeAttribute('open');
            }
        });
    });
});
