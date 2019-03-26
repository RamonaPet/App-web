import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatAutocompleteModule, MatCheckboxModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatSelectModule,
  MatSliderModule, MatSlideToggleModule, MatButtonModule, MatCardModule, MatIconModule, MatTableModule, MatFormFieldModule, MatGridListModule,
  MatPaginatorModule, MatDividerModule, MatListModule, MatSnackBarModule, MatTreeModule
} from '@angular/material';

import { MatTabsModule } from '@angular/material/tabs';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TutorialsRoutingModule } from './tutorials-routing.module';

import { TutorialDetailComponent } from './tutorial-detail/tutorial-detail.component';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatAutocompleteModule, MatCheckboxModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule, MatButtonModule, MatCardModule, MatIconModule, MatTableModule, MatFormFieldModule, MatGridListModule,
    MatPaginatorModule, MatDividerModule, MatListModule, MatSnackBarModule, MatTabsModule, CKEditorModule,
    FlexLayoutModule, MatTreeModule,
    TutorialsRoutingModule
  ],
  declarations: [
    TutorialDetailComponent,
    TutorialListComponent
  ]
})
export class TutorialsModule { }
