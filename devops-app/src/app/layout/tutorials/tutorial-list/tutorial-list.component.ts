import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Tutorial } from '../../../shared/services/tutorial/tutorial';
import { TutorialService } from '../../../shared/services/tutorial/tutorial.service';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.scss']
})
export class TutorialListComponent implements OnInit {
  public dataSource = null;
  public displayedColumns = ['id', 'name', 'description', 'info', 'active'];

  constructor(
    private route: ActivatedRoute,
    private serviceItems: TutorialService) { }

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

    let item = new Tutorial();

    item.name = name;
    item.active = true;

    this.serviceItems.addItem(item).subscribe(item => {
      this.fillItems();
    });
  }

  deleteItem(item: Tutorial): void {
    this.serviceItems.deleteItem(item).subscribe(item => {
      this.fillItems();
    });
  }
}