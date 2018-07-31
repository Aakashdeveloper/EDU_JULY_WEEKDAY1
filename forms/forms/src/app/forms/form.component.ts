import { Component} from '@angular/core';
import { Employee } from '../models/forms.model';
import { NgForm } from '@angular/forms';
import { FormService } from '../service/form-poster.service';

@Component({
    selector: 'app-forms',
    templateUrl: 'form.component.html'
})

export class FormComponent {
    language = ['AngularJs', 'ReactJs', 'NodeJs'];

    model = new Employee('John', 'andrew', 'a@a.com', true, 'male', 'AngularJs');

    constructor(private _formPoster: FormService) {}
    firstToUpper(value: string) {
        if (value.length > 0) {
            this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            this.model.firstName = value;
        }

    }

    submitForm(form: NgForm) {
        this._formPoster.postEmployee(form.value)
            .subscribe((data) => console.log('success'),
                    (err) => console.log('err'));
    }
}



/*
ng-pristine ng-invalid ng-untouched
ng-dirty    ng-valid   ng-touched
*/
