import { Directive,  ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appDatetimepicker]'
})
export class DatetimepickerDirective  {
  @Input() defaultColor: string
  private readonly nativeElement : Node;
  constructor(
    private readonly elementRef: ElementRef, 
    private readonly renderer: Renderer2, 
    private readonly element : ElementRef
  ) {
    // This is intentional
  }

  ngOnInit() {
    // This is intentional
  }

  botClick() {
    // This is intentional    
  }
}
