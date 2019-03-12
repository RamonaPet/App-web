import { Component, OnInit } from '@angular/core';

import { Tool } from '../../../shared/services/tool/tool';
import { ToolService } from '../../../shared/services/tool/tool.service';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.scss']
})
export class ToolListComponent implements OnInit {
  toolItems: Array<Tool> = [];

  constructor(
    private toolService: ToolService) { }

  ngOnInit() {
    this.getTools();
  }

  private getTools() {
    this.toolService.getItems().subscribe(toolItems => {
      this.toolItems = toolItems;
    });
  }

  addItem(toolName: string, toolInfo: string): void {
    toolName = toolName.trim();
    toolInfo = toolInfo.trim();
    if (!toolName) { return; }

    let tool = new Tool();

    tool.name = toolName;
    tool.info = toolInfo;

    this.toolService.addItem(tool)
      .subscribe(item => {
        this.getTools();
      });
  }

  delete(item: Tool): void {
    this.toolService.deleteItem(item).subscribe(item => {
      this.getTools();
    });
  }
}
