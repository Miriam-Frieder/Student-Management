import { Directive, ElementRef, HostListener, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[hasClass]',
  standalone: true
})
export class ColorDirective {

  @Input()
  hasClass: boolean;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['hasClass']) {
      this.updateTextColor();
    }
  }

  private updateTextColor() {
   if ( this.hasClass){
      this.el.nativeElement.style.color ='gray';
   }
   else{
    this.el.nativeElement.style.color ='black';
   }


  }
 
}


