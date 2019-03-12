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

import { ToolsRoutingModule } from './tools-routing.module';

import { ToolListComponent } from './tool-list/tool-list.component';
import { ToolDetailComponent } from './tool-detail/tool-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatGridListModule,
    MatDividerModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatTabsModule,
    MatTableModule,
    MatSnackBarModule,
    CKEditorModule,
    ToolsRoutingModule
  ],
  declarations: [
    ToolListComponent,
    ToolDetailComponent
  ], entryComponents: [

  ]
})
export class ToolsModule { }


