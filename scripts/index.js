class Tarjeta {
  constructor(id, titulo, descripcion, imagen) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen || "https://via.placeholder.com/300x150?text=Sin+Imagen";
  }
}

class GestorTarjetas {
  constructor() {
    this.tarjetas = [];
    this.contador = 1;
  }

  crearTarjeta(titulo, descripcion, imagen) {
    const tarjeta = new Tarjeta(this.contador++, titulo, descripcion, imagen);
    this.tarjetas.push(tarjeta);
    return tarjeta;
  }

  eliminarTarjeta(id) {
    this.tarjetas = this.tarjetas.filter(t => t.id !== id);
  }

  obtenerTarjetas() {
    return this.tarjetas;
  }
}

const gestor = new GestorTarjetas();
const form = document.getElementById("actividad-form");
const contenedor = document.getElementById("contenedor-tarjetas");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const titulo = document.getElementById("titulo").value;
  const descripcion = document.getElementById("descripcion").value;
  const imagen = document.getElementById("imagen").value;

  const nuevaTarjeta = gestor.crearTarjeta(titulo, descripcion, imagen);

  const tarjetaDiv = document.createElement("div");
  tarjetaDiv.classList.add("tarjeta");

  const imagenActividad = document.createElement("img");
  imagenActividad.src = nuevaTarjeta.imagen;

  const tituloActividad = document.createElement("h2");
  tituloActividad.textContent = nuevaTarjeta.titulo;

  const descripcionActividad = document.createElement("p");
  descripcionActividad.textContent = nuevaTarjeta.descripcion;

  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.classList.add("eliminar");
  botonEliminar.addEventListener("click", () => {
    gestor.eliminarTarjeta(nuevaTarjeta.id);
    tarjetaDiv.remove();
  });

  tarjetaDiv.appendChild(imagenActividad);
  tarjetaDiv.appendChild(tituloActividad);
  tarjetaDiv.appendChild(descripcionActividad);
  tarjetaDiv.appendChild(botonEliminar);
  contenedor.appendChild(tarjetaDiv);

  form.reset(); 
});
