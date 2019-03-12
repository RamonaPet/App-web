import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUpdateListComponent } from './product-update-list.component';

describe('ProductUpdateListComponent', () => {
  let component: ProductUpdateListComponent;
  let fixture: ComponentFixture<ProductUpdateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductUpdateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUpdateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
