import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.scss'],
})
export class FilterProductsComponent implements OnInit {
  products: any[] = [];
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.products = JSON.parse(params['data']);
    });
    console.table(this.products)
  }

  ngOnInit(): void {}
}
