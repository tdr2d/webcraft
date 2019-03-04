import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoxPickerComponent } from './box-picker/box-picker.component';
import { BoxItemComponent } from './box-picker/box-item/box-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxPickerComponent,
    BoxItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
