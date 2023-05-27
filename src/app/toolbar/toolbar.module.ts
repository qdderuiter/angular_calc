import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar.component';


@NgModule({
  declarations: [ToolbarComponent],
  imports: [BrowserModule, MatToolbarModule],
  exports: [ToolbarComponent],
  providers: [],
})
export class ToolbarModule {}
