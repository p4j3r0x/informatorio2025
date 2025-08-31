// Desaparece la pantalla de bienvenida después de 3 segundos
window.addEventListener("load", () => {
    setTimeout(() => {
        const bienvenida = document.getElementById("bienvenida");
        bienvenida.style.transition = "opacity 1s ease";
        bienvenida.style.opacity = 0;

        setTimeout(() => {
            bienvenida.style.display = "none";
        }, 1000);
    }, 2000);
});

// Navbar aparece al hacer scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navegacion');
    if (window.scrollY > 10) {
        navbar.classList.add('activar-nav');
    } else {
        navbar.classList.remove('activar-nav');
    }
});
