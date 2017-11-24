import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe
  constructor(private recipeService: RecipeService) {
    
       }

  ngOnInit() {
    this.recipeService.RecipeSelected.subscribe(
      (rec:Recipe)=>{
       
        this.selectedRecipe=rec;
        console.log(this.selectedRecipe);
      
      });
  }
 
}
