import { TestBed } from '@angular/core/testing';

import { TutorialChapterService } from './tutorial-chapter.service';

describe('TutorialChapterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TutorialChapterService = TestBed.get(TutorialChapterService);
    expect(service).toBeTruthy();
  });
});
