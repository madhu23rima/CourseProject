import { EventEmitter } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from 'rxjs/Subject';


export class ShoppingListService{
   ingredients: Ingredient[]=[new Ingredient("Apple",5),new Ingredient("Tomato",10)];
   ingredientChanged= new Subject<Ingredient[]>();
   ingredientEdit= new Subject<number>();
public getShoppingList(){
     return this.ingredients.slice();
}

getIngredient(index:number){
    return this.ingredients[index];
}
addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
}

addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
}

updateIngredient(index:number , ingredient: Ingredient){
    this.ingredients[index]=ingredient
    this.ingredientChanged.next(this.ingredients.slice());
}

deleteIngredient(index:number ){
    this.ingredients.splice(index,1)
    this.ingredientChanged.next(this.ingredients.slice());
}
}