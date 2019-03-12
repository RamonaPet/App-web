import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialChapterDetailComponent } from './tutorial-chapter-detail.component';

describe('TutorialChapterDetailComponent', () => {
  let component: TutorialChapterDetailComponent;
  let fixture: ComponentFixture<TutorialChapterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialChapterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialChapterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
