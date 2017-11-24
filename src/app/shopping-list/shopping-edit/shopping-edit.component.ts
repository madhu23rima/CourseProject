import { Component, OnInit, ViewEncapsulation, } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingEditComponent implements OnInit {
ingredients=[]; 
name:string;
amount:number;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAdd(){
    if(this.name && this.amount){      
      var ingre=new Ingredient(this.name,this.amount);
      this.slService.addIngredient(ingre);
    }

  }
}
