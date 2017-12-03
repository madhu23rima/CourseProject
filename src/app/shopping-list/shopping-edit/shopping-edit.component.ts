import { Component, OnInit, ViewEncapsulation,OnDestroy,ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';




@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

@ViewChild("f") ingrForm:NgForm
editmode=false;
editItemIndex:number;
editItem: Ingredient;
subscription:Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription=this.slService.ingredientEdit.subscribe(
        (index:number) => {   
        this.editmode     = true;
        this.editItemIndex=index;
        const ingr =  this.slService.getIngredient(index);
        this.editItem= ingr;
        this.ingrForm.setValue(
          { name : ingr.name,
            amount: ingr.amount
          }
        )
       
     });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onAdd(form:NgForm){
    const formval= form.value;
    const newIngredient= new Ingredient(formval.name,formval.amount);
    if(this.editmode)
    {    
      this.slService.updateIngredient(this.editItemIndex,newIngredient);
    }
    else {     
     
      this.slService.addIngredient(newIngredient);
    }
    this.editmode=false;
    this.ingrForm.reset();
   
  }

  onClear(){
    this.editmode=false;
    this.ingrForm.reset();
  }

  onDelete(){
    this.onClear();
    this.slService.deleteIngredient(this.editItemIndex );
    } 
      

}
