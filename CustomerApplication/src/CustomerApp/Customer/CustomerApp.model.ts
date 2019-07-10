import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

// Create: Create the validation object model
// Connect: connect the validation object model to the Ui
// Check: IsValid, IsDirty
export class Customer {
    CustomerCode = '';
    CustomerName = '';
    CustomerAmount = 0;
    formCustomerGroup: FormGroup = null; // Create object of FormGroup
    constructor() {
        const builder = new FormBuilder();
        this.formCustomerGroup = builder.group({});
        //  Create Controls and for it the validations
        this.formCustomerGroup.addControl('CustomerNameControl', new FormControl('', Validators.required));
        // Customer Code control
        // Required, max & min 4 letter numeric
        const validationcollection = [];
        validationcollection.push(Validators.required);
        validationcollection.push(Validators.pattern('^[0-9]{4,4}$'));

        this.formCustomerGroup.addControl('CustomerCodeControl', new FormControl('', Validators.compose(validationcollection))
        );
    }
}
