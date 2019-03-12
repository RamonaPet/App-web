import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewDetailComponent } from './new-detail/new-detail.component';
import { NewListComponent } from './new-list/new-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'new-list' },
  { path: 'new-list', component: NewListComponent },
  { path: 'new-detail/:id/:viewtype', component: NewDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class NewsRoutingModule { }
