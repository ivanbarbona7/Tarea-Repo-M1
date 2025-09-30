document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("actividad-form");
  const contenedor = document.getElementById("contenedor-tarjetas");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita recarga de la página

    // Tomamos los valores de los inputs
    const titulo = document.getElementById("titulo").value;
    const descripcion = document.getElementById("descripcion").value;
    const imagen = document.getElementById("imagen").value || "https://via.placeholder.com/300x150?text=Sin+Imagen";

    // Creamos la tarjeta
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    tarjeta.innerHTML = `
      <img src="${imagen}" alt="${titulo}">
      <div class="contenido">
        <h3>${titulo}</h3>
        <p>${descripcion}</p>
        <button class="eliminar">Eliminar</button>
      </div>
    `;

    // Agregamos evento al botón de eliminar
    tarjeta.querySelector(".eliminar").addEventListener("click", () => {
      tarjeta.remove();
    });

    // Agregamos la tarjeta al contenedor
    contenedor.appendChild(tarjeta);

    // Limpiamos el formulario
    form.reset();
  });
});
