import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductUpdateDetailComponent } from './product-update-detail/product-update-detail.component';
import { ProductUpdateListComponent } from './product-update-list/product-update-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'product-update-list' },
  { path: 'product-update-list', component: ProductUpdateListComponent },
  { path: 'product-update-detail/:id', component: ProductUpdateDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductUpdatesRoutingModule { }


