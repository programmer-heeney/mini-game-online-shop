"use strict";
export { itemData };

class Item {
  constructor(sex, size, icon, color, type) {
    this.sex = sex;
    this.size = size;
    this.icon = icon;
    this.color = color;
    this.type = type;
  }
}

const itemData = [
  new Item("Men", "small size", "imgs/blue_p.png", "blue", "p"),
  new Item("Women", "large size", "imgs/yellow_p.png", "yellow", "p"),
  new Item("Men", "small size", "imgs/pink_p.png", "pink", "p"),
  new Item("Women", "small size", "imgs/blue_t.png", "blue", "t"),
  new Item("Men", "large size", "imgs/yellow_t.png", "yellow", "t"),
  new Item("Women", "small size", "imgs/pink_t.png", "pink", "t"),
  new Item("Women", "small size", "imgs/blue_s.png", "blue", "s"),
  new Item("Men", "large size", "imgs/yellow_s.png", "yellow", "s"),
  new Item("Woman", "small size", "imgs/pink_s.png", "pink", "s"),
  new Item("Men", "large size", "imgs/blue_p.png", "blue", "p"),
  new Item("Women", "small size", "imgs/yellow_p.png", "yellow", "p"),
  new Item("Women", "large size", "imgs/pink_p.png", "pink", "p"),
];
