// desaparece después de 3 segundos
setTimeout(() => {
  const bienvenida = document.getElementById("bienvenida");
  bienvenida.style.transition = "opacity 1s ease";
  bienvenida.style.opacity = 0;

  // para ocultar el elemento en html
  setTimeout(() => {
    bienvenida.style.display = "none";
  }, 1000); // 1s de transición
}, 3000); //3seg de duracion

// Navbar cambia al hacer scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navegacion');
  if (window.scrollY > 10) {
    navbar.classList.add('activar-nav');
  } else {
    navbar.classList.remove('activar-nav');
  }
});


//boton certificados

const btn = document.getElementById("btn-certificados");
const certificados = document.getElementById("certificados");

btn.addEventListener("click", () => {
    certificados.classList.toggle("oculto");
});
