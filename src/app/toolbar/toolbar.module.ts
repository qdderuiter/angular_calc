import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [BrowserModule, MatToolbarModule, MatSlideToggleModule],
  exports: [ToolbarComponent, MatSlideToggleModule],
  providers: [],
})
export class ToolbarModule {}
