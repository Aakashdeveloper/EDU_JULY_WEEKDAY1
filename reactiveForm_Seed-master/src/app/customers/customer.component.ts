import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder,
            Validators} from '@angular/forms';

import { Customer } from './customer';

@Component({
    selector: 'app-signup',
    templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit  {
    customerForm: FormGroup;
    customer: Customer= new Customer();

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.customerForm = this.fb.group({
            firstName: ['John', [Validators.required, Validators.minLength(3)]],
            lastName: ['', [Validators.required, Validators.maxLength(5)] ],
            email: ['', [Validators.required, Validators.pattern('[a-z0-9]+@[a-z0-9]+')]]
        });
    }
    save() {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }
 }


 /*
 ngOnInit(): void {
        this.customerForm = new FormGroup({
            firstName: new FormControl(),
            lastName: new FormControl(),
            email: new FormControl(),
            sendCatalog: new FormControl(true)
        });
    }
*/
