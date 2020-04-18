const stockPhotos = [
  {
    id: 1,
    title: "City at night",
    desc: "Night city street blurred background through crystal glass ball",
    price: 0.38,
    img:
      "https://image.shutterstock.com/image-photo/night-city-street-blurred-background-260nw-1619197744.jpg",
    link:
      "https://www.shutterstock.com/image-photo/night-city-street-blurred-background-through-1619197744",
  },
  {
    id: 2,
    title: "Winter landscape",
    desc: "Beautiful winter nature landscape with amazing mountain view",
    price: 2.85,
    img:
      "https://image.shutterstock.com/image-photo/beautiful-winter-nature-landscape-amazing-600w-1152828263.jpg",
    link:
      "https://www.shutterstock.com/image-photo/beautiful-winter-nature-landscape-amazing-mountain-1152828263",
  },
  {
    id: 3,
    title: "Coffee in big City",
    desc:
      "cup of coffe on the table of the outdoor cafe on the italian city sidewalk",
    price: 1.38,
    img:
      "https://image.shutterstock.com/image-photo/cup-coffe-on-table-outdoor-600w-1151189870.jpg",
    link:
      "https://www.shutterstock.com/image-photo/cup-coffe-on-table-outdoor-cafe-1151189870",
  },
];

const createHtml = ({ id, title, desc, price, img, link }) => `
<div class="col" style="width: 350px;">
          <div class="card">
            <img
              src="${img}"
              class="card-img-top"
              style="width: 300px;"
              alt="${desc}"/>
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${desc}</p>
              <a href="${link}"
                target="_blank"
                class="btn btn-primary"
                >Go to Shutterstock</a>
              <button class="btn btn-primary" data-btn="price" data-id="${id}">Get price</button>
            </div>
          </div>
        </div>
`;

function render() {
  const html = stockPhotos.map((stockPhoto) => createHtml(stockPhoto)).join("");
  document.querySelector("#photos").innerHTML = html;
}

render();

const priceModal = $.modal({
  title: "Price for license this image",
  closable: true,
  width: "400px",
  footerButtons: [
    {
      text: "Ok",
      type: "primary",
      handler() {
        priceModal.close();
      },
    },
    // {
    //   text: "Cancel",
    //   type: "danger",
    //   handler() {

    //   },
    // },
  ],
});

document.addEventListener("click", (event) => {
  event.preventDefault();

  const btnType = event.target.dataset.btn;
  const id = +event.target.dataset.id;

  if (btnType === "price") {
    const photo = stockPhotos.find((photo) => photo.id === id);
    priceModal.setContent(`
    <p>Price for image "${photo.title}" starting from <strong>${photo.price}</srtong></p>`);
    priceModal.open();
  }
});
