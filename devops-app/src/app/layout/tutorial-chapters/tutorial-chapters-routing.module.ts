import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TutorialChapterDetailComponent } from './tutorial-chapter-detail/tutorial-chapter-detail.component';
import { TutorialChapterListComponent } from './tutorial-chapter-list/tutorial-chapter-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorial-chapter-list' },
  { path: 'tutorial-chapter-list', component: TutorialChapterListComponent },
  { path: 'tutorial-chapter-detail/:id', component: TutorialChapterDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TutorialChaptersRoutingModule { }