import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { FormGroup,FormControl ,FormArray,Validators} from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { RequiredValidator } from '@angular/forms/src/directives/validators';
import { Recipe } from '../recipe.model';



@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeEditComponent implements OnInit {
id:number;
editMode:boolean=false;
  constructor( private route: ActivatedRoute,private recipeService: RecipeService, private router: Router) { }
recipeForm: FormGroup

  ngOnInit() {
    this.route.params.subscribe(
       (par:Params)=>{
         this.id= +par['id'];
         this.editMode= par['id']!=null;     
         this.initForm();   
       }      
    );
  }
  onSubmit(){   
  //  let newRecipe= new Recipe(this.recipeForm.value.name, 
  //   this.recipeForm.value.description,
  //   this.recipeForm.value.imagePath, 
  //   this.recipeForm.value.ingredients);
    if(this.editMode){

      this.recipeService.updateRecipe( this.id,this.recipeForm.value);
    }
    else{

      this.recipeService.addRecipe(this.recipeForm.value);
    }
 
    this.router.navigate(['../'],{relativeTo: this.route})
 
  }
  
  onCancel(){
    this.router.navigate(['../'],{relativeTo: this.route})
  }
  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
          name: new FormControl(null,Validators.required),
          amount: new FormControl(null,  [ Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }));
  }
  onDeleteIngredient(index : number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
  private initForm(){
   let  recipename='';
   let recipeImage='';
   let recipedesc='';
   let recipeIngredients = new FormArray([]);
   if(this.editMode){
      const recipe=this.recipeService.getRecipe(this.id);
      recipename=recipe.name;
      recipeImage=recipe.imagePath;
      recipedesc=recipe.description;
      if(recipe['ingredients']){
        for( let ingr of recipe.ingredients){
          recipeIngredients.push( new FormGroup({
            name: new FormControl(ingr.name, Validators.required),
            amount: new FormControl(ingr.amount,
            [ Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }))  
        }
      }
   }

   this.recipeForm= new FormGroup({
   name: new FormControl(recipename, Validators.required),
   imagePath:new FormControl(recipeImage, Validators.required),
   description: new FormControl(recipedesc, Validators.required),
   ingredients: recipeIngredients
   }) 
   
   
  }


  
}
