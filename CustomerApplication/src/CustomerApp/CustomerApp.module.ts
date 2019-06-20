import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';
import { CustomerComponent } from './CustomerApp.component';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
