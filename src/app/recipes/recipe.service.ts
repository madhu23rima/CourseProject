import { Injectable} from '@angular/core';
import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppinglist.service';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class RecipeService{
  private  recipes: Recipe[]=[
        new Recipe("Chicken ChickPeas",
        "30-Minute Pressure Cooker Chicken With Chickpeas",
        "http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg"
       ,[
         new Ingredient('Chicken',1)
        ,new Ingredient('Peas',20)
        ])
      , new Recipe("Chicken Burger",
      "Delicious Chicken Burger",
      "http://www.myculinarystories.com/wp-content/uploads/2017/01/Chicken-Burger7.jpg"
      ,[
        new Ingredient('Buns',2)
        ,new Ingredient('French',1)
      ])
      
   ];
   recipeUpdated = new Subject();
 
   constructor(private slService: ShoppingListService){}
   getRecipes(){
    console.log(this.recipes.slice());
       return this.recipes.slice();
      
   }

   getRecipe(index: number){
    return this.recipes[index];
   }


   addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
   }

   addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipeUpdated.next();
   }

   updateRecipe(index:number, recipe:Recipe){
   this.recipes[index]=recipe;
   this.recipeUpdated.next();
   }

   deleteRecipe(index: number){
    this.recipes.splice(index,1);
    this.recipeUpdated.next();
    
   }
}