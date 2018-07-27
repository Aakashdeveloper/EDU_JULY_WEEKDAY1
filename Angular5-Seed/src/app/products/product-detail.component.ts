import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    id: number;
    name: string;
    description: string;
    image: string;

    constructor(private _activeroute: ActivatedRoute,
                private _router: Router) {}

    ngOnInit(): void {
        this.id = +this._activeroute.snapshot.params['id'];

        this._activeroute
            .queryParams
            .subscribe((params) => {
                this.name = params['name'];
                this.description = params['desc'];
                this.image = params['image'];
            });
    }

    onBack(): void {
        this._router.navigate(['product']);
    }
}

