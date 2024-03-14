import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  product: any = {};
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.product = JSON.parse(params['data']);
    });
  }

  ngOnInit(): void {}
}
