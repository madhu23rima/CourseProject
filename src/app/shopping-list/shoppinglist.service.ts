import { EventEmitter } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";


export class ShoppingListService{
    ingredients: Ingredient[]=[new Ingredient("Apple",5),new Ingredient("Tomato",10)];
   ingredientChanged= new EventEmitter<Ingredient[]>();
public getShoppingList(){
     return this.ingredients.slice();
}

addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
}

addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
}
}