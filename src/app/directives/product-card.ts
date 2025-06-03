import { Directive, ElementRef, HostListener, OnChanges } from '@angular/core';

@Directive({
  selector: '[appProductCard]',
})
export class ProductCardDirective implements OnChanges {
  constructor(private el: ElementRef) {}
  ngOnChanges(): void {
    this.el.nativeElement.style.setProperty('border-radius', '16px');
    this.el.nativeElement.style.setProperty(
      'box-shadow',
      '0 2px 8px rgba(0,0,0,0.15)',
      'important'
    );
    this.el.nativeElement.style.setProperty(
      'border',
      '2px solid #ddd',
      'important'
    );
  }
  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.el.nativeElement.style.setProperty(
      'box-shadow',
      '0 8px 24px rgba(0,0,0,0.25)',
      'important'
    );
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.el.nativeElement.style.setProperty(
      'box-shadow',
      '0 2px 2px rgba(171, 176, 176, 0.97)',
      'important'
    );
  }
}
