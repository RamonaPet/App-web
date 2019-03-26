
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
  public news: News[];

  constructor(
    private route: ActivatedRoute,
    private serviceItems: NewsService) { }

  ngOnInit() {
    this.fillItems();
  }

  fillItems(): void {
    this.news = [
      {
        id: 1,
        name: 'New breakthroughs in medicine',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        description: '',
        active: true
      },
      {
        id: 2,
        name: 'How to save up on energy',
        info: 'Consectetur a erat nam at lectus urna. Morbi tincidunt augue interdum velit euismod in. Ornare massa eget egestas purus viverra. Malesuada fames ac turpis egestas sed tempus. Fames ac turpis egestas maecenas pharetra convallis posuere. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Aenean pharetra magna ac placerat vestibulum lectus mauris. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Dui ut ornare lectus sit amet est placerat in egestas. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper.',
        description: '',
        active: true
      },
      {
        id: 3,
        name: 'Could our solar system have a new planet?',
        info: 'Consectetur a erat nam at lectus urna. Morbi tincidunt augue interdum velit euismod in. Ornare massa eget egestas purus viverra. Malesuada fames ac turpis egestas sed tempus. Fames ac turpis egestas maecenas pharetra convallis posuere. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Aenean pharetra magna ac placerat vestibulum lectus mauris. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Dui ut ornare lectus sit amet est placerat in egestas. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper.',
        description: '',
        active: true
      }
    ];
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