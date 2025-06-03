import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menu = [
    {
      name: 'Starters',
      items: [
        { name: 'Paneer Tikka', price: 180 },
        { name: 'Veg Manchurian', price: 160 },
        { name: 'Gobi 65', price: 150 },
        { name: 'Chicken 65', price: 200 },
        { name: 'Tandoori Chicken', price: 250 }
      ]
    },
    {
      name: 'Indian Breads',
      items: [
        { name: 'Plain Naan', price: 40 },
        { name: 'Butter Naan', price: 50 },
        { name: 'Garlic Naan', price: 60 },
        { name: 'Tandoori Roti', price: 30 },
        { name: 'Lachha Paratha', price: 55 }
      ]
    },
    {
      name: 'Starters1',
      items: [
        { name: 'Paneer Tikka', price: 180 },
        { name: 'Veg Manchurian', price: 160 },
        { name: 'Gobi 65', price: 150 },
        { name: 'Chicken 65', price: 200 },
        { name: 'Tandoori Chicken', price: 250 }
      ]
    },
    {
      name: 'Indian Breads1',
      items: [
        { name: 'Plain Naan', price: 40 },
        { name: 'Butter Naan', price: 50 },
        { name: 'Garlic Naan', price: 60 },
        { name: 'Tandoori Roti', price: 30 },
        { name: 'Lachha Paratha', price: 55 }
      ]
    }
  ];
}