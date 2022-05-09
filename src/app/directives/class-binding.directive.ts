import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClassBinding]'
})
export class ClassBindingDirective {

  constructor(elementRef: ElementRef, renderer: Renderer2) { // сразу при запуске, директива меняет курсор при наведении на элемент
    renderer.setStyle(elementRef.nativeElement, 'cursor', 'pointer')
  }

  @HostListener('mousedown') onMouseDown() {
    this.isClicked = true;
  }
  
  @HostListener('mouseup') onMouseUp() {
    this.isClicked = false;
  }

    // если условие true, то к элементу будет добавлен класс pressed
  @HostBinding('class.pressed') isClicked: boolean = false;

}
