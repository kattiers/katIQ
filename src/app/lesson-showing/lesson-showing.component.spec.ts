import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonShowingComponent } from './lesson-showing.component';

describe('LessonShowingComponent', () => {
  let component: LessonShowingComponent;
  let fixture: ComponentFixture<LessonShowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonShowingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LessonShowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
