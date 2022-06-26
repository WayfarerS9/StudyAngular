import {
  ComponentFactoryResolver,
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Directive({
  selector: '[appBusyButton]'
})
export class BusyButtonDirective {
  #color: ThemePalette = 'accent';
  #diameter: number = 18;
  #isSpinning: boolean | null = null; 
  #spinner: MatProgressSpinner | null = null;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    ) {}

    @Input()
    set appSpinOnColor(color: ThemePalette) {
      this.#color = color;
      if (this.#spinner) {
        this.#spinner.color = color;
      }
    }
  
    @Input()
    set appSpinOnDiameter(diameter: number) {
      this.#diameter = diameter;
      if (this.#spinner) {
        this.#spinner.diameter = diameter;
      }
    }

  @Input() set appBusyButton(condition: boolean) {
    if (condition !== this.#isSpinning) {
      this.#spinner = null;      
      this.viewContainer.clear();
      this.#isSpinning = condition;
      if (!condition) {              
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else if (condition) {       
        this.addSpinner();
      }
    }
  }

  private addSpinner() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(MatProgressSpinner);
    const { instance } = this.viewContainer.createComponent<MatProgressSpinner>(componentFactory);
    instance.diameter = this.#diameter;
    instance.color = this.#color;
    instance.mode = 'indeterminate';
    instance._elementRef.nativeElement.classList.add('spin-on-instance');
    this.#spinner = instance;    
  }
}









/*   @HostListener('click') onBusy() { */

/*     
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerText', ''); */    




/* Игра с домэлементами
this.renderer.setStyle(this.elementRef.nativeElement, 'width', window.getComputedStyle(this.elementRef.nativeElement).width);
this.renderer.setStyle(this.elementRef.nativeElement, 'height', window.getComputedStyle(this.elementRef.nativeElement).height);
this.renderer.setProperty(this.elementRef.nativeElement, 'innerText', '');
let matIcon = this.renderer.createElement('mat-icon');
let matSpinner = this.renderer.createElement('mat-spinner');
this.renderer.appendChild(matIcon, matSpinner);
this.renderer.appendChild(this.elementRef.nativeElement, matIcon);
this.renderer.setStyle(matSpinner, 'color', 'accent');
this.renderer.setStyle(matSpinner, 'diameter', '20px'); */