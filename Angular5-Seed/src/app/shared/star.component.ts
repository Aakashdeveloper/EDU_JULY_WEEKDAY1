import { Component, Input, OnChanges,
        Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {

    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();


    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    onStar(): void {
        this.ratingClicked.emit(`The rating clicked is ${this.rating}`);
    }
}


/*
var a = 10;
var b = "my age is "+a
my age is 10

`my age is ${a}`

function add(a,b){
    return a+b
}

var sum = add(2,4)
dependency injection
a coding pattern in which a class receives the instnace of object
it need from external source rather than creating itself

*/
