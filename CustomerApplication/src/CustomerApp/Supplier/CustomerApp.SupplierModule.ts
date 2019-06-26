import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SupplierPageComponent } from './CustomerApp.SupplierPageComponent';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    SupplierPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [SupplierPageComponent]
})
export class SupplierModule { }
