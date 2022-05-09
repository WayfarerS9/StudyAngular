import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appAddElements], appAddElements' // теперь директиву можно использовать как атрибут и как элемент
})
export class AddElementsDirective {

  @Input() message: string = ''; // позволяет использовать в классе директивы значение переменной message из шаблона, заданной в качестве свойства ДОМ элемента 
  @Input() count: string = '';


  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {

    for(let i = 1; i <= +this.count; i++) {
      let elem: HTMLDivElement = this.renderer.createElement('div');
      this.renderer.appendChild(this.elementRef.nativeElement, elem);
      elem.innerHTML = this.message;
    }
  }

}
