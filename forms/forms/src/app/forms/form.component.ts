import { Component} from '@angular/core';
import { Employee } from '../models/forms.model';

@Component({
    selector: 'app-forms',
    templateUrl: 'form.component.html'
})

export class FormComponent {
    language = ['AngularJs', 'ReactJs', 'NodeJs'];

    model = new Employee('John', '', true, '', '');

}
