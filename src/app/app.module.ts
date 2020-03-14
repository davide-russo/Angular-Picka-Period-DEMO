import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {NgxPickaPeriodModule, NgxPickaPeriodComponent} from 'ngx-picka-period';
import {AppComponent} from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPickaPeriodModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [AppComponent],
  bootstrap:    [AppComponent]
})
export class AppModule { }
