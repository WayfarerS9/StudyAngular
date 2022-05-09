import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms'

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BindingsComponent } from './components/bindings/bindings.component';
import { FormsComponent } from './components/forms/forms.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { InfScrollComponent } from './components/inf-scroll/inf-scroll.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { IndigoColorDirective } from './directives/indigo-color.directive';
import { RedColorDirective } from './directives/indigo-color.directive';
import { EventDirectivesDirective } from './directives/event-directives.directive';
import { DirectiveWithGetArgDirective } from './directives/directive-with-get-arg.directive';
import { AddElementsDirective } from './directives/add-elements.directive';
import { ConfirmActionDirective } from './directives/confirm-action.directive';
import { EventPassDirective } from './directives/event-pass.directive';
import { ClassBindingDirective } from './directives/class-binding.directive';
import { BusyButtonComponent } from './components/busy-button/busy-button.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BusyButtonDirective } from './directives/busy-button.directive';
import { ValuePropMainComponent } from './components/valueProp/value-prop-main/value-prop-main.component';
import { ValuePropIntermediaryComponent } from './components/valueProp/value-prop-intermediary/value-prop-intermediary.component';


@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    BindingsComponent,
    FormsComponent,
    ReactiveFormComponent,
    InfScrollComponent,
    CustomDirectiveComponent,
    IndigoColorDirective,
    RedColorDirective,
    EventDirectivesDirective,
    DirectiveWithGetArgDirective,
    AddElementsDirective,
    ConfirmActionDirective,
    EventPassDirective,
    ClassBindingDirective,
    BusyButtonComponent,
    BusyButtonDirective,
    ValuePropMainComponent,
    ValuePropIntermediaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    InfiniteScrollModule,
    ScrollingModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


