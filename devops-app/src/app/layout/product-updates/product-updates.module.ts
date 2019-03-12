import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductUpdatesRoutingModule } from './product-updates-routing.module';

import { ProductUpdateDetailComponent } from './product-update-detail/product-update-detail.component';
import { ProductUpdateListComponent } from './product-update-list/product-update-list.component';

@NgModule({
  imports: [
    CommonModule,
    ProductUpdatesRoutingModule
  ],
  declarations: [
    ProductUpdateListComponent,
    ProductUpdateDetailComponent
  ]
})
export class ProductUpdatesModule { }
