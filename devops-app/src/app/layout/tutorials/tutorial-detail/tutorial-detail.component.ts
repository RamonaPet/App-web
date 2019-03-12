import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';

import { Tutorial } from '../../../shared/services/tutorial/tutorial';
import { TutorialService } from '../../../shared/services/tutorial/tutorial.service';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

/** Constants used to fill up our data base. */
const VIEWS = [
  'edit',
  'view'
];

@Component({
  selector: 'app-tutorial-detail',
  templateUrl: './tutorial-detail.component.html',
  styleUrls: ['./tutorial-detail.component.scss']
})
export class TutorialDetailComponent implements OnInit {
  @Input() item: Tutorial;
  public Editor = ClassicEditor;

  public viewType; 

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    public snackBar: MatSnackBar,
    public itemService: TutorialService
  ) {
    this.viewType = +this.route.snapshot.paramMap.get('viewtype');
    console.log('test:' + VIEWS[this.viewType] );
   }

  ngOnInit() {
    this.getItem();
  }

  private getItem() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.itemService.getItem(id).subscribe(item => {
      this.item = item;
    });
  }

  onFileImageInput(event) {
    
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.itemService.updateItem(this.item).subscribe(() =>
      this.goBack()
    );
  }
}