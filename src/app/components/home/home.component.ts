import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items: any[] = [];
  constructor(private router: Router, private apiService: ApiService) {
    this.apiService.getAllData().subscribe((data) => {
      this.router.navigate([], {
        queryParams: { data: JSON.stringify(data) },
      });
    });
  }

  searchProduct(textSearch: String): void {
    this.apiService.getSearchData(textSearch).subscribe((data) => {
      this.router.navigate(['items'], {
        queryParams: { data: JSON.stringify(data) },
      });
    });
  }

  ngOnInit(): void {}
}
