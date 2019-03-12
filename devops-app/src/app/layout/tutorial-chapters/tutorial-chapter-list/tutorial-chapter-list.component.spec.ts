import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialChapterListComponent } from './tutorial-chapter-list.component';

describe('TutorialChapterListComponent', () => {
  let component: TutorialChapterListComponent;
  let fixture: ComponentFixture<TutorialChapterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialChapterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialChapterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
