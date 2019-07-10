// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
// import { AppRoutingModule } from '../app-routing.module';
import { CustomerComponent } from './CustomerApp.CustomerComponent';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    // AppRoutingModule,
    FormsModule,
    RouterModule.forChild(CustomerRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }



