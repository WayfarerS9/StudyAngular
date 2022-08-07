import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvanceRoutComponent } from './components/advance-rout/advance-rout.component';
import { FirstChildRoutComponent } from './components/advance-rout/first-child-rout/first-child-rout.component';
import { SecondChildRoutComponent } from './components/advance-rout/second-child-rout/second-child-rout.component';
import { DateComponent } from './components/date/date.component';
import { UseDiallogComponent } from './components/mat-dialogs/use-diallog/use-diallog.component';
import { MatTablesComponent } from './components/mat-tables/mat-tables.component';
import { RepeatComponent } from './components/repeat/repeat.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';

const routes: Routes = [
  { path: '', redirectTo: 'matDialog', pathMatch: 'full'}, // редайрект по умолчанию
  { path: 'matDialog', component: UseDiallogComponent},
  { path: 'matTables', component: MatTablesComponent},
  { path: 'repeat', component: RepeatComponent},
  { path: 'rxjs', component: RxjsComponent},
  { path: 'date', component: DateComponent},
  { 
    path: 'advanceRout',
    component: AdvanceRoutComponent,
    children: [
      { path: 'firstChild', component: FirstChildRoutComponent},
      { path: 'secondChild', component: SecondChildRoutComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
