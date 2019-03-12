import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';

import { Tool } from '../../../shared/services/tool/tool';
import { ToolService } from '../../../shared/services/tool/tool.service';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

/** Constants used to fill up our data base. */
const VIEWS = [
  'edit',
  'view'
];

@Component({
  selector: 'app-tool-detail',
  templateUrl: './tool-detail.component.html',
  styleUrls: ['./tool-detail.component.scss']
})
export class ToolDetailComponent implements OnInit {
  @Input() item: Tool;
  public Editor = ClassicEditor;

  public viewType; 

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    public snackBar: MatSnackBar,
    public toolService: ToolService
  ) {
    this.viewType = +this.route.snapshot.paramMap.get('viewtype');
    console.log('test:' + VIEWS[this.viewType] );
   }

  ngOnInit() {
    this.getItem();
  }

  private getItem() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.toolService.getItem(id).subscribe(item => {
      this.item = item;
    });
  }

  onFileImageInput(event) {
    var fileReader = new FileReader();
    for (const file of event.target.files) {
      fileReader.readAsDataURL(file);
      fileReader.onload = (eventx) => {
        this.item.image = eventx.target['result'];
      }
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.toolService.updateItem(this.item).subscribe(() =>
      this.goBack()
    );
  }
}
/*
@Component({
  selector: 'information-message',
  templateUrl: 'information-message.component.html',
  styles: [`
    .success-message {
      color: #90EE90;
      text-align: center;
    }
  `],
})
export class InformationComponent { }
//*/