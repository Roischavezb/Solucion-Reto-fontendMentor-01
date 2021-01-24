const d = document;

const $icono = d.querySelector(".card__icono");

d.addEventListener("click", (e) => {
    if (e.target.matches(".card__icono")) {
        console.log(e.target);
        document.querySelector(".card__bloque-tooltip").classList.toggle("ocultar")
            ? $icono.classList.remove("icono-claro")
            : $icono.classList.add("icono-claro");
    }
});
