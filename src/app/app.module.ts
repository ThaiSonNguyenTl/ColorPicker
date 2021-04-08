import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { ResetComponent } from './components/reset/reset.component';
import { ResultComponent } from './components/result/result.component';
import { SizeSettingComponent } from './components/size-setting/size-setting.component';
import { SortNumberPipe } from './pipes/sort-number.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    ResetComponent,
    ResultComponent,
    SizeSettingComponent,
    SortNumberPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
