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


const routes: Routes = [
  { path: '', redirectTo: 'autocomplete', pathMatch: 'full'}, // редайрект по умолчанию
  { path: 'autocomplete', component: AutocompleteComponent},
  { path: 'bindings', component: BindingsComponent},
  { path: 'forms', component: FormsComponent},
  { path: 'reactiveForm', component: ReactiveFormComponent},
  { path: 'infinityScroll', component: InfScrollComponent},
  { path: 'directive', component: CustomDirectiveComponent},
  { path: 'busyButton', component: BusyButtonComponent},
  { path: 'valueProp', component: ValuePropIntermediaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
