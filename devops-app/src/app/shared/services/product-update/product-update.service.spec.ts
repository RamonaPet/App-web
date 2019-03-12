import { TestBed } from '@angular/core/testing';

import { ProductUpdateService } from './product-update.service';

describe('ProductUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductUpdateService = TestBed.get(ProductUpdateService);
    expect(service).toBeTruthy();
  });
});
