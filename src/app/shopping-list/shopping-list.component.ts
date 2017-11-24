import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients= this.shoppingListService.getShoppingList();
    this.shoppingListService.ingredientChanged.subscribe(
      (ings:Ingredient[])=>this.ingredients= this.shoppingListService.getShoppingList()
       
    );
  }

 
}
