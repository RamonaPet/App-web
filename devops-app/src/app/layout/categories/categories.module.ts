import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule, MatInputModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';

import { CategoriesRoutingModule } from './categories-routing.module';

import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule, 
    MatButtonModule, 
    MatCardModule, 
    MatIconModule, 
    MatDividerModule, 
    MatInputModule,
    MatGridListModule,
    FlexLayoutModule,
    CategoriesRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [
    CategoryListComponent,
    CategoryDetailComponent
  ]
})
export class CategoriesModule { }
