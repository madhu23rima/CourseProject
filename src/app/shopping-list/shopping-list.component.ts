import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingListComponent implements OnInit , OnDestroy{
ingredients: Ingredient[];
subscription:Subscription
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients= this.shoppingListService.getShoppingList();
    this.subscription = this.shoppingListService.ingredientChanged.subscribe(
      (ings:Ingredient[])=>this.ingredients= this.shoppingListService.getShoppingList()
       
    );
  }

 ngOnDestroy(){
  this.subscription.unsubscribe();
 }

 onEdit(index:number){
  console.log(index);
   this.shoppingListService.ingredientEdit.next(index);

 }
}
