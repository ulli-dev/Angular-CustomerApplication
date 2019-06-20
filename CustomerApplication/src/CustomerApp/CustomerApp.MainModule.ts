import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CustomerComponent } from './Customer/CustomerApp.CustomerComponent';
import { SupplierPageComponent } from './Supplier/CustomerApp.SupplierPageComponent';
import { HomeComponent } from './Home/CustomerApp.HomeComponent';
import { MasterPageComponent } from './Home/CustomerApp.MasterPageComponent';
import { MainRoutes } from './Routing/CustomerApp.MainRouting';

@NgModule({
  declarations: [
    CustomerComponent, MasterPageComponent, SupplierPageComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class CustomerModule { }
