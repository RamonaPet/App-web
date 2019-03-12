
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Category } from '../../../shared/services/category/category';
import { CategoryService } from '../../../shared/services/category/category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  @Input() item: Category;

  constructor(private route: ActivatedRoute,
    private itemService: CategoryService,
    private location: Location) { }

  ngOnInit() {
    this.getItem();
  }

  getItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id)
      .subscribe(item => this.item = item);
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
    this.itemService.updateItem(this.item)
      .subscribe(() => this.goBack());
  }
}