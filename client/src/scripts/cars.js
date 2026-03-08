//Navbar container

const nav = document.querySelector("nav");
nav.className = "nav-container";

const navLeft = document.createElement("div");
navLeft.className = "nav-left";

const navLeftTitle = document.createElement("h1");
navLeftTitle.textContent = "CarShop";

navLeft.appendChild(navLeftTitle);

const navRight = document.createElement("div");
navRight.className = "nav-right";

const navRightTitle = document.createElement("h3");
navRightTitle.textContent = "Home";

navRightTitle.addEventListener("click", () => {
  history.pushState({}, "", "/");
  renderHome();
});

navRight.appendChild(navRightTitle);
nav.appendChild(navLeft);
nav.appendChild(navRight);

//Header Container

const header = document.querySelector("header");
header.className = "header-container";

async function renderHome() {
  header.innerHTML = "";

  try {
    const response = await fetch("http://localhost:3000/cars");

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const cars = await response.json();

    cars.forEach((car) => {
      const card = document.createElement("div");
      card.className = "card";

      const cardImage = document.createElement("img");
      cardImage.className = "card-image";
      cardImage.src = car.image;

      const cardTitle = document.createElement("h2");
      cardTitle.textContent = `${car.name} ${car.model}`;

      const cardButton = document.createElement("button");
      cardButton.textContent = "Click for info";
      cardButton.className = "card-btn";

      cardButton.addEventListener("click", () => {
        history.pushState({}, "", `/cars/${car.name}`);
        renderSingleCar(car.name);
      });

      card.appendChild(cardImage);
      card.appendChild(cardTitle);
      card.appendChild(cardButton);

      header.appendChild(card);
    });
  } catch (error) {
    console.log(error);
    header.innerHTML = "<p>Error loading cars</p>";
  }
}

//Render single car

async function renderSingleCar(name) {
  header.innerHTML = "";

  try {
    const response = await fetch(`http://localhost:3000/cars/${name}`);

    if (!response.ok) {
      throw new Error("Car not found");
    }

    const car = await response.json();

    header.innerHTML = `
      <div class="header-car-container">
        <div class="car-image-div">
          <img src="${car.image}" alt="${car.name} ${car.model}" />
        </div>
        <div class="car-info-div">
          <h2>${car.name} ${car.model}</h2>
          <p>${car.description}</p>
          <p>Engine: ${car.engine}</p>
          <p>Price: $${car.price}</p>
        </div>
      </div>
    `;
  } catch (error) {
    console.log(error);
    header.innerHTML = "<p>Car not found</p>";
  }
}

function handleRoute() {
  const path = window.location.pathname;

  if (path === "/") {
    renderHome();
  } else if (path.startsWith("/cars/")) {
    const carName = path.split("/").pop();
    renderSingleCar(carName);
  }
}

window.addEventListener("popstate", handleRoute);

handleRoute();
