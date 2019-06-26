// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SupplierPageComponent } from './CustomerApp.SupplierPageComponent';
import { SupplierRoutes } from '../Routing/CustomerApp.SupplierRouting';
// import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    SupplierPageComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    // AppRoutingModule,
    FormsModule,
    RouterModule.forChild(SupplierRoutes)
  ],
  providers: [],
  bootstrap: [SupplierPageComponent]
})
export class SupplierModule { }
