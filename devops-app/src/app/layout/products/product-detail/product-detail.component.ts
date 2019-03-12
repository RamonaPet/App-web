import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';

import { Product } from '../../../shared/services/product/product';
import { ProductService } from '../../../shared/services/product/product.service';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

/** Constants used to fill up our data base. */
const VIEWS = [
  'edit',
  'view'
];

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() item: Product;
  public Editor = ClassicEditor;

  public viewType; 

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    public snackBar: MatSnackBar,
    public toolService: ProductService
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