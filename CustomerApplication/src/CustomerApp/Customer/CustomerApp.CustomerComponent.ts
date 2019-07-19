import { Component } from '@angular/core';
import { Customer } from './CustomerApp.model';

@Component({
  templateUrl: './CustomerApp.CustomerView.html',
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

/* (This portion threw errors in the console that I wasn't able to resolve yet. It also grayes out the Add Button.
NOT using this atm)--> More comments related to code below in CustomerView.html lines 18-21)
*/
/*
  hasError(typeofvalidator: string,
           controlname: string): boolean {
            return this.CustomerModel.formCustomerGroup.contains[controlname].hasError(typeofvalidator);
    }
    */
}
