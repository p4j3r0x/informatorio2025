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




document.addEventListener('DOMContentLoaded', () => {
 const parrafo = document.getElementById('texto-copiable');
  let timeoutId = null; // guardamos el ID del setTimeout

  parrafo.addEventListener('click', () => {
    const textoOriginal = parrafo.innerText;

    // cancelar cualquier timeout anterior
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    navigator.clipboard.writeText(textoOriginal)
      .then(() => {
        parrafo.innerText = "¡Texto copiado!";

        // restaurar texto original después de 1.5 segundos
        timeoutId = setTimeout(() => {
          parrafo.innerText = textoOriginal;
          timeoutId = null;
        }, 1500);
      })
      .catch(err => console.error('Error al copiar:', err));
  });


});

