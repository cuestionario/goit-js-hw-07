import { galleryItems } from "./gallery-items.js";

document.addEventListener("DOMContentLoaded", () => {
  const createItem = (item) => {

    return `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>
</li>`;
  };

  const itemsContainer = document.querySelector(".gallery");
  for (const item of galleryItems) {
    const newItem = createItem(item);
    itemsContainer.innerHTML += newItem;
  }

  // Inicializar SimpleLightbox
  const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt", // Usa el atributo "alt" para los subtítulos
    captionsPosition: "bottom",
    captionDelay: 250,
  });

  // Abrir la ventana modal al hacer clic en cualquiera de las imágenes
  itemsContainer.addEventListener("click", (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto que dirige a la URL de la imagen

    if (e.target.tagName === "IMG") {
      const source = e.target.dataset.source;
      const alt = e.target.dataset.alt;
    }
  });
});
