import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon';
import { FormComponent } from './form.component';

@NgModule({
  declarations: [FormComponent],
  imports: [BrowserModule, MatInputModule, FormsModule, MatIconModule],
  exports: [FormComponent],
  providers: [],
})
export class FormModule { }
