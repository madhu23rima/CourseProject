
import { Component, OnInit, ViewEncapsulation,OnDestroy} from '@angular/core';
import {Recipe} from '../recipe.model'
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit, OnDestroy {
 recipes: Recipe[];
 subscription: Subscription
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.subscription=this.recipeService.recipeUpdated.subscribe(
      ()=>{ this.recipes=this.recipeService.getRecipes();}
    )
    this.recipes=this.recipeService.getRecipes();
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
