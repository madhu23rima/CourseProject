import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {
 recipes: Recipe[]=[
   new Recipe("A Test Recipe","This is a simplay a test","http://www.seriouseats.com/recipes/assets_c/2016/12/20161201-crispy-roast-potatoes-29-thumb-1500xauto-435281.jpg")
 , new Recipe("A Test Recipe","This is a simplay a test","http://www.seriouseats.com/recipes/assets_c/2016/12/20161201-crispy-roast-potatoes-29-thumb-1500xauto-435281.jpg")
 
  ];
  constructor() { }

  ngOnInit() {
  }

}
