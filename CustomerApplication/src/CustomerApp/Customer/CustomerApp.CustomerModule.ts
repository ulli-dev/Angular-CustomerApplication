import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CustomerComponent } from '../CustomerApp.component';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }



