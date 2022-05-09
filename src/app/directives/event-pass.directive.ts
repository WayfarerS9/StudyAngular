import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEventPass]'
})
export class EventPassDirective {

  constructor(private elementRef: ElementRef) { }
  
  // первый параметр - имя события, второй параметр - объект события, $ - важен, так среда понимает что передается имеено событие
  @HostListener ('mousemove', ['$event']) onMouseMove(event: MouseEvent) {  // означает, что при наступлении события в диррективу
    let message = 'X' + event.offsetX + 'Y' + event.offsetY;                // передается объект события и запускается метод с аргументом
    this.elementRef.nativeElement.innerHTML = message;                      // события
  }
}
