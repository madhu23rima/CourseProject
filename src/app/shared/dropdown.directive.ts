import {Directive,HostListener,HostBinding} from '@angular/core'


@Directive({
selector: '[appDropdown]'
})
export class DropdownDirective{
 @HostBinding('class.open')  isclicked: boolean=false;
    
    @HostListener('click') toggleOpen(){
        this.isclicked=!this.isclicked;
       
    }
}