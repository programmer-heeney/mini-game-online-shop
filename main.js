"use strict";
import { itemData } from "./data.js";

const buildItemCard = (item) => {
  // Create a Single item Dynamically Using JS
  const li = document.createElement("li");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const itemsList = document.querySelector(".items");

  // Append newly created elements into the DOM
  li.append(img);
  li.append(p);
  itemsList.append(li);

  // Set content and attributes
  p.innerText = `${item.sex}, ${item.size}`;
  li.setAttribute("class", "item");
  li.setAttribute("data-color", item.color);
  li.setAttribute("data-type", item.type);
  img.setAttribute("src", item.icon);
};

itemData.forEach((item) => buildItemCard(item));

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
