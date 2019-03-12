import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUpdateDetailComponent } from './product-update-detail.component';

describe('ProductUpdateDetailComponent', () => {
  let component: ProductUpdateDetailComponent;
  let fixture: ComponentFixture<ProductUpdateDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductUpdateDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUpdateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
