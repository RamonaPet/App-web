
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Product } from '../../../shared/services/product/product';
import { ProductService } from '../../../shared/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public dataSource = null;
  public displayedColumns = ['image', 'name'];

  constructor(
    private route: ActivatedRoute,
    private serviceItems: ProductService) { }

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

    let category = new Product();

    category.name = name;
    category.active = true;

    this.serviceItems.addItem(category).subscribe(item => {
      this.fillItems();
    });
  }

  deleteItem(item: Product): void {
    this.serviceItems.deleteItem(item).subscribe(item => {
      this.fillItems();
    });
  }
}


