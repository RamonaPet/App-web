import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Category } from '../../../shared/services/category/category';
import { CategoryService } from '../../../shared/services/category/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  public dataSource = null;
  public displayedColumns = ['image', 'name'];

  constructor(
    private route: ActivatedRoute,
    private serviceItems: CategoryService) { }

  ngOnInit() {
    this.fillItems();
  }

  fillItems(): void {
    this.dataSource = new MatTableDataSource([{
      id: 1,
      name: 'string 1',
      info: '',
      active: true,
      image: ''
    }, {
      id: 2,
      name: 'string 2',
      info: '',
      active: true,
      image: ''
    }]);
    this.serviceItems.getItems().subscribe(items => {
      this.dataSource = new MatTableDataSource(items);
    });
  }

  addItem(name: string): void {
    name = name.trim();
    if (!name) { return; }

    let category = new Category();

    category.name = name;
    category.active = true;

    this.serviceItems.addItem(category).subscribe(item => {
      this.fillItems();
    });
  }

  deleteItem(item: Category): void {
    this.serviceItems.deleteItem(item).subscribe(item => {
      this.fillItems();
    });
  }
}
