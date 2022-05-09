import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectiveWithGetArg]'
})
export class DirectiveWithGetArgDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  // в Input указываем название директивы, в аргумент changeColor попадает значение из шаблона
  @Input('appDirectiveWithGetArg') set changeColor (c: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', c);
  }

}
