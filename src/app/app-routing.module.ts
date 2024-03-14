import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilterProductsComponent } from './components/filter-products/filter-products.component';
import { ItemComponent } from './components/item/item.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'items', component: FilterProductsComponent },
  { path: 'item', component: ItemComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
