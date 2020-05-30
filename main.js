"use strict";
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
