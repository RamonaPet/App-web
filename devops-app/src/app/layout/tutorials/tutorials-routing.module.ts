import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TutorialDetailComponent } from './tutorial-detail/tutorial-detail.component';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorial-list' },
  { path: 'tutorial-list', component: TutorialListComponent },
  { path: 'tutorial-detail/:id/:viewtype', component: TutorialDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TutorialsRoutingModule { }