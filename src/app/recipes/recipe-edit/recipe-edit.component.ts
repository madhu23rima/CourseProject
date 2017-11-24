import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeEditComponent implements OnInit {
id:number;
editMode:boolean=false;
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
       (par:Params)=>{
         this.id= +par['id'];
         this.editMode= par['id']!=null;
         console.log(this.editMode);
       }      
    );
  }

}
