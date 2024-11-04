import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetStudentComponent } from './reset-student.component';

describe('ResetStudentComponent', () => {
  let component: ResetStudentComponent;
  let fixture: ComponentFixture<ResetStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetStudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResetStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
