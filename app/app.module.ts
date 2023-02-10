import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic-component/dynamic-component.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, DynamicComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
