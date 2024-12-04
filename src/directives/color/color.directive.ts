import { Directive, ElementRef, HostListener, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[hasClass]',
  standalone: true
})
export class ColorDirective {

  @Input()
  hasClass: number[] = [];

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['hasClass']) {
      this.updateTextColor();
    }
  }

  private updateTextColor() {
    this.el.nativeElement.style.color = this.hasClass.length === 0 ? 'gray' : 'black';
  }
 
}


