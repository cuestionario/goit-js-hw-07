import { galleryItems } from "./gallery-items.js";
// Change code below this line

const createItem = (item) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="Image description"
    />
  </a>
</li>`;
};

const itemsContainer = document.querySelector(".gallery");
for (const item of galleryItems) {
  const newItem = createItem(item);
  itemsContainer.innerHTML += newItem;
}

//para abrir la ventana modal al hacer click en cualquiera de las imagenes
itemsContainer.addEventListener("click", (e) => {
  e.preventDefault(); //Evita el comportamiento por defecto que consiste en dirigir a la url de la imagen

  if (e.target.tagName === "IMG") {
    const source = e.target.dataset.source;

    const instance = basicLightbox.create(
      `<img src="${source}" alt="${e.target.alt}" />`
    );

    instance.show();
  }
});