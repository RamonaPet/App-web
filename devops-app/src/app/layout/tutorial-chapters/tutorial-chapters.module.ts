import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialChaptersRoutingModule } from './tutorial-chapters-routing.module';

import { TutorialChapterDetailComponent } from './tutorial-chapter-detail/tutorial-chapter-detail.component';
import { TutorialChapterListComponent } from './tutorial-chapter-list/tutorial-chapter-list.component';

@NgModule({
  imports: [
    CommonModule,
    TutorialChaptersRoutingModule
  ],
  declarations: [
    TutorialChapterDetailComponent,
    TutorialChapterListComponent
  ]
})
export class TutorialChaptersModule { }
