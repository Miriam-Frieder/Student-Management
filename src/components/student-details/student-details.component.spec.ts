import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailsComponent } from './student-details.component';

describe('ResetStudentComponent', () => {
  let component: StudentDetailsComponent;
  let fixture: ComponentFixture<StudentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
