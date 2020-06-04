"use strict";
// Create a Single item Dynamically Using JS
const ul = document.createElement("ul");
const li = document.createElement("li");
const img = document.createElement("img");
const p = document.createElement("p");
const itemsContainer = document.querySelector(".items__container");

itemsContainer.append(ul);
li.append(img);
li.append(p);
ul.append(li);

p.innerText = "male, small size";
ul.setAttribute("calss", "items");
li.setAttribute("class", "item");
li.setAttribute("data-color", "blue");
li.setAttribute("data-type", "p");
img.setAttribute("class", "item__icon");
img.setAttribute("src", "imgs/blue_p.png");
p.setAttribute("class", "item__name");

// Handle click on buttons on category
const categories = document.querySelectorAll(".categories");
const items = document.querySelectorAll(".item");
categories.forEach((category) => {
  category.addEventListener("click", (e) => {
    const filter =
      e.target.dataset.category || e.target.parentNode.dataset.category;
    if (filter == null) {
      return;
    }

    items.forEach((item) => {
      if (filter === item.dataset.color || filter === item.dataset.type) {
        item.classList.remove("invisible");
      } else {
        item.classList.add("invisible");
      }
    });
  });
});

// Handle click on logo
const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.remove("invisible");
  });
});
