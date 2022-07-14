import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/interface/menu-item';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menuItem : MenuItem[]=[
    {item:"Chicken Fingers",Category:"dinner",price:11.99},
    {item:"Cinnamon Roll",Category:"dessert",price:3.99},
    {item:"Choco Lava Cake",Category:"dessert",price:4.99},
    {item:"Cheese Cake",Category:"dessert",price:6.99},
    {item:"Pizza",Category:"dinner",price:14.99},
    {item:"Ceasor Salad",Category:"salad",price:5.99},
    {item:"House Salad",Category:"salad",price:6.99},
    {item:"Chicken Alfredo Pasta",Category:"dinner",price:13.99}
  ]
}
