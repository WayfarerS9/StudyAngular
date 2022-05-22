import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component'
import { BindingsComponent } from './components/bindings/bindings.component'
import { FormsComponent } from './components/forms/forms.component'
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component'
import { InfScrollComponent } from './components/inf-scroll/inf-scroll.component'
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { BusyButtonComponent } from './components/busy-button/busy-button.component';
import { ValuePropIntermediaryComponent } from './components/valueProp/value-prop-intermediary/value-prop-intermediary.component';
import { Lesson33Component } from './components/lesson33/lesson33.component';
import { BindClassComponent } from './components/lesson33/bind-class/bind-class.component';
import { Lesson32Component } from './components/lesson32/lesson32.component';
import { ReactiveForm2Component } from './components/reactive-form2/reactive-form2.component';
import { ReactiveForm3Component } from './components/reactive-form3/reactive-form3.component';


const routes: Routes = [
  { path: '', redirectTo: 'autocomplete', pathMatch: 'full'}, // редайрект по умолчанию
  { path: 'autocomplete', component: AutocompleteComponent},
  { path: 'bindings', component: BindingsComponent},
  { path: 'forms', component: FormsComponent},
  { path: 'reactiveForm', component: ReactiveFormComponent},
  { path: 'reactiveForm2', component: ReactiveForm2Component},
  { path: 'reactiveForm3', component: ReactiveForm3Component},
  { path: 'infinityScroll', component: InfScrollComponent},
  { path: 'directive', component: CustomDirectiveComponent},
  { path: 'busyButton', component: BusyButtonComponent},
  { path: 'valueProp', component: ValuePropIntermediaryComponent},
  { path: 'lesson32', component: Lesson32Component},
  { path: 'lesson33', component: Lesson33Component},
  { path: 'bindClass', component: BindClassComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
