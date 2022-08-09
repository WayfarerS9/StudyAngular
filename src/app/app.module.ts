import { NgModule } from '@angular/core';

import { Component, OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDialogsComponent } from './components/mat-dialogs/mat-dialogs.component';
import { MatTablesComponent } from './components/mat-tables/mat-tables.component';
import { MatButtonModule } from '@angular/material/button';
import { UseDiallogComponent } from './components/mat-dialogs/use-diallog/use-diallog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule } from '@angular/material/table';
import { RepeatComponent } from './components/repeat/repeat.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MyDateAdapter, APP_DATE_FORMATS } from './adapters/date.adapter';
import { AdvanceRoutComponent } from './components/advance-rout/advance-rout.component';
import { FirstChildRoutComponent } from './components/advance-rout/first-child-rout/first-child-rout.component';
import { SecondChildRoutComponent } from './components/advance-rout/second-child-rout/second-child-rout.component';
import { DateComponent } from './components/date/date.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from "@angular/material-moment-adapter";

/* const MY_FORMATS = {
  parse: {
    dateInput: 'DD MMMM YYYY',
  },
  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
}; */


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MatDialogsComponent,
    MatTablesComponent,
    UseDiallogComponent,
    RepeatComponent,
    RxjsComponent,
    AdvanceRoutComponent,
    FirstChildRoutComponent,
    SecondChildRoutComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    LayoutModule,
    MatButtonModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatMomentDateModule,
  ],
  providers: [
    {provide: DateAdapter, useClass: MyDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS},
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
