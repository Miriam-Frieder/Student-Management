import { Directive, ElementRef, HostListener, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[noClass]',
  standalone: true
})
export class ColorDirective {

  @Input()
  noClass: boolean;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['noClass']) {
      this.updateTextColor();
    }
  }

  private updateTextColor() {
   if ( this.noClass){
      this.el.nativeElement.style.color ='gray';
      this.el.nativeElement.title='no classes';
   }
   else{
    this.el.nativeElement.style.color ='black';
   }


  }
 
}


