import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

import { delay, filter } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NavigationEnd, Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  navigationButtons = [
    {
      name: 'Dialog',
      route: 'matDialog',
    },
    {
      name: 'Tables',
      route: 'matTables',
    },
    {
      name: 'Repeat',
      route: 'repeat',
    },
    {
      name: 'RxJS', 
      route: 'rxjs',
    },
    {
      name: 'AdvanceRout', 
      route: 'advanceRout',
    },
    {
      name: 'Date', 
      route: 'date',
    },
  ];
  isShowBurger?: boolean;

  // Шаблонная переменная, содержащая боковую панель навигации. Имеет методы:
  // open() - открыть
  // close() - закрыть
  // toggle() - сменить

  @ViewChild('snav') sidenav!: MatSidenav;

// Создание массива из контента
/*   fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut`,
  ); */

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,

    // При помощи этого класса можно отслеживать изменения шириниы экрана.
    // Смотри хук ngAfterViewInit. Там происходит подписка и обработка событя
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) { 

    // задается размер экрана, который будет отсдеживаться
    this.mobileQuery = media.matchMedia('(max-width: 600px)');

    // в переменную записывается функция, которая будет замечать изменения
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();

    //навешивается прослушивальщик с колбэком. Без него, значение в this.mobileQuery будет
    //меняться только при обращении к ней
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngAfterViewInit() {
    console.log(this.breakpointObserver)

    this.breakpointObserver
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
          this.isShowBurger = true;
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
          this.isShowBurger = false;
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }



}
