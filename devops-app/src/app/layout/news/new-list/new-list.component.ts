
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { News } from '../../../shared/services/news/news';
import { NewsService } from '../../../shared/services/news/news.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {
  public dataSource = null;
  public displayedColumns = ['id', 'name', 'description', 'info', 'active'];

  constructor(
    private route: ActivatedRoute,
    private serviceItems: NewsService) { }

  ngOnInit() {
    this.fillItems();
  }

  fillItems(): void {
    this.serviceItems.getItems().subscribe(items => {
      this.dataSource = new MatTableDataSource(items);
    });
  }

  addItem(name: string): void {
    name = name.trim();
    if (!name) { return; }

    let item = new News();

    item.name = name;
    item.active = true;

    this.serviceItems.addItem(item).subscribe(item => {
      this.fillItems();
    });
  }

  deleteItem(item: News): void {
    this.serviceItems.deleteItem(item).subscribe(item => {
      this.fillItems();
    });
  }
}