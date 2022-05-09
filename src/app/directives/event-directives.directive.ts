import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appEventDirectives]'
})
export class EventDirectivesDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

// HostListener прослушивает события ДОМ элемента, к которому применена дирректива.
// Если происходят события, указанные выше, запускаются соответсвующие методы.
// Их название не имеет значения.
// Ключ для поиска в инете - имена событий 
  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('green');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor(null);
  }
  
  private changeColor(color: string | null) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', color);    
  }
}