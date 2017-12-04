import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(foodArray: any[], searchFood: string) {
    //return empty array if there is no  array (just in case)
    if (!foodArray) {
      return [];
    }

    //return the full array if there's no search food
    if (!searchFood) {
      return foodArray;
  }

  searchFood = searchFood.toLowerCase();

  const fullFoodFilter = [];

  foodArray.forEach((oneFood) => {
    if(oneFood.name.toLowerCase().includes(searchFood)) {
      fullFoodFilter.push(oneFood);
     }
   });

   return fullFoodFilter;

  }
}
