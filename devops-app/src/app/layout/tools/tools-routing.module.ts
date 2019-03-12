import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToolListComponent } from './tool-list/tool-list.component';
import { ToolDetailComponent } from './tool-detail/tool-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'tool-list' },
  { path: 'tool-list', component: ToolListComponent },
  { path: 'tool-detail/:id/:viewtype', component: ToolDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ToolsRoutingModule { }
