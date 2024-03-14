import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-grid-items',
  templateUrl: './grid-items.component.html',
  styleUrls: ['./grid-items.component.scss'],
})
export class GridItemsComponent implements OnInit {
  @Input() inputData!: any[];
  products: any[] = [];
  loading = true;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.products = JSON.parse(params['data']);
      this.loading = false;
    });
    console.table(this.products);
  }

  ngOnInit(): void {}

  goToProduct(id: String) {
    this.apiService.getIdData(id).subscribe((data) => {
      this.router.navigate(['item'], {
        queryParams: { data: JSON.stringify(data) },
      });
    });
  }
}
