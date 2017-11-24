import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Recipe } from '../recipe.model';

import { ActivatedRoute,Params,Router } from '@angular/router';
import { RecipeService } from '../recipe.service';



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeDetailComponent implements OnInit {
   recipe:Recipe;
   id:number;
   constructor(private recipeService: RecipeService, private activeRoute: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params:Params) => {
        this.id= +params['id'];
        this.recipe=this.recipeService.getRecipe(this.id);
        
      })
  }
  addToShoppingList(){
   this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  editRecipe(){
    
    this.router.navigate(['edit'], {relativeTo: this.activeRoute});
    //the below also works
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.activeRoute})
  }
}
