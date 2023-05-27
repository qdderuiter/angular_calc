import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToolbarModule } from './toolbar/toolbar.module';
import { FormModule } from './form/form.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ToolbarModule, FormModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
