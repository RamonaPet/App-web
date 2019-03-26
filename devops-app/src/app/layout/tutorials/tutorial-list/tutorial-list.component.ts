import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Tutorial } from '../../../shared/services/tutorial/tutorial';
import { TutorialService } from '../../../shared/services/tutorial/tutorial.service';

import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

interface TutorialNode {
  id: number;
  name: string;
  children?: TutorialNode[];
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.scss']
})
export class TutorialListComponent implements OnInit {

  public displayedColumns = ['id', 'name', 'description', 'info', 'active'];

  constructor(
    private route: ActivatedRoute,
    private serviceItems: TutorialService) { }

  private transformer = (node: TutorialNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
        this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);      
  ngOnInit() {
    this.fillItems();
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  fillItems(): void {

    this.dataSource.data = [
      {
        id: 1,
        name: 'Jenkins',       
        children: [{
            id: 5,
            name: 'What is Jenkins',        
            children: [{
                id: 7,
                name: 'Introduction',        
                children: []
              },{
                id: 8,
                name: 'History',        
                children: []
            }]
          }, {
            id: 6,
            name: 'Installing',         
            children: [{
              id: 9,
              name: 'Introduction',        
              children: []
            },{
              id: 10,
              name: 'Prerequisites',        
              children: []
          }]
        }]
      },      
      {
        id: 4,
        name: 'Octopus',       
        children: [{
          id: 7,
          name: 'Course Overview',         
          children: []
        }, {
          id: 8,
          name: 'Understanding Deployment and Synchronization',         
          children: []
        }]
      }
    ];
    
    // this.serviceItems.getItems().subscribe(items => {
    //   this.dataSource = new MatTableDataSource(items);
    // });
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