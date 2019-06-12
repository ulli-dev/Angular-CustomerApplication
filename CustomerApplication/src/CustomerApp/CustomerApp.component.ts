import { Component } from '@angular/core';
import { Customer } from './CustomerApp.model';

@Component({
  selector: 'app-root',
  templateUrl: './CustomerApp.view.html',
  /*styleUrls: ['./app.component.css']*/
})
export class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>(); /*Collection of new customers*/
  Add() {
    this.CustomerModels.push(this.CustomerModel); /*pushes a new customer into the UI table */
    this.CustomerModel = new Customer(); /*clears the UI, so user doesn't have to delete the form*/
  }
}
