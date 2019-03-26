import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatAutocompleteModule, MatCheckboxModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatSelectModule,
  MatSliderModule, MatSlideToggleModule, MatButtonModule, MatCardModule, MatIconModule, MatTableModule, MatFormFieldModule, MatGridListModule,
  MatPaginatorModule, MatDividerModule, MatListModule, MatSnackBarModule
} from '@angular/material';

import { MatTabsModule } from '@angular/material/tabs';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NewsRoutingModule } from './news-routing.module';

import { NewDetailComponent } from './new-detail/new-detail.component';
import { NewListComponent } from './new-list/new-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatAutocompleteModule, MatCheckboxModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule, MatButtonModule, MatCardModule, MatIconModule, MatTableModule, MatFormFieldModule, MatGridListModule,
    MatPaginatorModule, MatDividerModule, MatListModule, MatSnackBarModule, MatTabsModule, CKEditorModule,
    FlexLayoutModule,
    NewsRoutingModule
  ],
  entryComponents: [
    NewDetailComponent
  ],
  declarations: [
    NewListComponent,
    NewDetailComponent
  ]
})
export class NewsModule { }
