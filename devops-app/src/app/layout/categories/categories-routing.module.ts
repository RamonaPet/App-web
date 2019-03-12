import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'category-list' },
  { path: 'category-list', component: CategoryListComponent },
  { path: 'category-detail/:id', component: CategoryDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CategoriesRoutingModule { }
