import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appConfirmAction]'
})
export class ConfirmActionDirective {

  @Input('appConfirmAction')
  onConfirmed: Function = () => {}; // В данном случае указано, что это свойство является функцией. После ее запуска по факту запускается значение appConfirmAction, которым является функция из компонента. Если написать таи any, все будет работать

  @HostListener('click') onConfirm() {
    let confirmed = window.confirm('Are you shure?');

    console.log(this.onConfirmed)
    if(confirmed) {
      this.onConfirmed()
    }
  }
  

}
