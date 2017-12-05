import { Component, OnInit } from '@angular/core';
import foodList from '../foods'

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};

  constructor() { }

  ngOnInit() {
    this.foods = foodList
  }

  addFood() {
    console.log("Clicked");

    // add contact to contacts list
    this.foods.push(this.newFood);

    // clear the input
    //comming soon
    
    console.log(foodList)
  }
}
